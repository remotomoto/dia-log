/* istanbul ignore file */
import _ from 'lodash';

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import { recordError } from '~/crashlytics/crashlytics';
import AuthenticationError from './AuthenticationError';

const file = 'store/Authentication/Authentication.backend';

// import { googleConfig } from './GoogleConfig';
// GoogleSignin.configure(googleConfig);

const signupWithEmail = async (options) => {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(options.email, options.password)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        recordError(error, {
          file,
          function: 'signupWithEmail.createUserWithEmailAndPassword',
          params: { email: options.email },
        });
        if (error.code === 'auth/email-already-in-use') {
          reject(new AuthenticationError('That email address is already in use', 'signupWithEmail.emailInUse'));
          return;
        }

        if (error.code === 'auth/invalid-email') {
          reject(new AuthenticationError('That email address is invalid', 'signupWithEmail.emailInvalid'));
          return;
        }

        reject(new AuthenticationError(error.message, 'signupWithEmail.generalError'));
      });
  });
};

const loginWithEmail = async (options) => {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(options.email, options.password)
      .then((result) => {
        if (!_.isNil(result.user)) {
          // TODO: get data after login
          resolve(result);
          return;
        }

        const error = new AuthenticationError('Unable to obtain user data', 'loginWithEmail.loginError');
        recordError(error, {
          file,
          function: 'loginWithEmail.signInWithEmailAndPassword',
          params: { email: options.email },
        });
        reject(error);
      })
      .catch((error) => {
        recordError(error, {
          file,
          function: 'loginWithEmail.signInWithEmailAndPassword',
          params: { email: options.email },
        });
        reject(new AuthenticationError(error.message, 'loginWithEmail.loginErrorThirdParty'));
      });
  });
};

const loginWithGoogle = async () => {
  return new Promise((resolve, reject) => {
    GoogleSignin.hasPlayServices({
      // Check if device has Google Play Services installed.
      // Always resolves to true on iOS.
      showPlayServicesUpdateDialog: true,
    }).then((hasPlayServices) => {
      if (!hasPlayServices) {
        const error = new AuthenticationError(
          'Google Play service is not available',
          'loginWithGoogle.playServiceNotAvailable',
        );
        recordError(error, { file, function: 'GoogleSignin.hasPlayServices' });
        reject(error);
        return;
      }

      GoogleSignin.signIn()
        .then((userInfo) => {
          // create a new firebase credential with the token
          const credentials = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);

          auth()
            .signInWithCredential(credentials)
            .then((result) => {
              if (!_.isNil(result.user)) {
                // TODO: get data after login
                resolve(result);
                return;
              }
              const error = new AuthenticationError(
                'Unable to obtain user data from login',
                'loginWithGoogle.loginError',
              );
              recordError(error, {
                file,
                function: 'loginWithGoogle.signInWithCredential.then',
                params: { credentials },
              });
              reject(error);
            })
            .catch((error) => {
              recordError(error, { file, function: 'loginWithGoogle.signInWithCredential', params: { credentials } });
              reject(new AuthenticationError(error.message, 'loginWithGoogle.loginErrorThirdParty'));
            });
        })
        .catch((error) => {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            reject(new AuthenticationError('Login was cancelled', 'loginWithGoogle.cancelled'));
            return;
          }
          recordError(error, { file, function: 'loginWithGoogle.GoogleSignin.signIn' });
          reject(new AuthenticationError(error.message, 'loginWithGoogle.loginErrorThirdParty'));
        });
    });
  });
};

const logout = async () => {
  return new Promise((resolve, reject) => {
    if (_.isNil(auth().currentUser)) {
      reject(new AuthenticationError('User is already logged out', 'logout.alreadyLoggedOutError'));
      return;
    }

    auth()
      .signOut()
      .then(() => {
        if (auth().currentUser) {
          reject(new AuthenticationError('Unable to logout user', 'logout.logoutError'));
          return;
        }
        resolve({});
      })
      .catch((error) => {
        recordError(error, { file, function: 'logout.auth().signOut' });
        reject(new AuthenticationError(error.message, 'logout.logoutErrorThirdParty'));
      });
  });
};

const passwordReset = async (email) => {
  return new Promise((resolve, reject) => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        recordError(error, { file, function: 'passwordReset.auth().sendPasswordResetEmail' });
        reject(new AuthenticationError(error.message, 'passwordReset.sendPasswordResetEmail'));
      });
  });
};

const getCurrentUser = () => auth().currentUser;

export { signupWithEmail, loginWithEmail, loginWithGoogle, logout, passwordReset, getCurrentUser, auth };

import AuthenticationError from './AuthenticationError';
import { isValidEmail, isValidPassword } from './Validate';
import { translate } from '~/i18n/i18n';

import { recordError } from '~/crashlytics/crashlytics';
import * as backend from './Authentication.backend';
import { getUser, saveUser } from '~/store/User/User.actions';

const file = 'store/Authentication/Authentication.actions';

export const SIGNUP_STARTED = 'SIGNUP_STARTED';
export const signupStarted = () => ({ type: SIGNUP_STARTED });

export const EMAIL_SIGNUP_STARTED = 'EMAIL_SIGNUP_STARTED';
export const EMAIL_SIGNUP_SUCCESS = 'EMAIL_SIGNUP_SUCCESS';
export const EMAIL_SIGNUP_ERROR = 'EMAIL_SIGNUP_ERROR';
export const emailSignupStarted = () => ({ type: EMAIL_SIGNUP_STARTED });
export const emailSignupSuccess = (provider, authData) => ({ type: EMAIL_SIGNUP_SUCCESS, provider, authData });
export const emailSignupError = (error) => ({ type: EMAIL_SIGNUP_ERROR, error });

export const emailSignup = (email, password, passwordConfirm) => {
  return async (dispatch) => {
    dispatch(emailSignupStarted());
    if (!isValidEmail(email)) {
      const message = translate('screen.signup.errors.invalidEmail');
      recordError(new AuthenticationError(message), {
        file,
        function: 'emailSignup',
        params: { email },
      });
      dispatch(emailSignupError(message));
      return;
    }
    if (!isValidPassword(password)) {
      const message = translate('screen.signup.errors.passwordNotMeetingRules');
      recordError(new AuthenticationError(message), {
        file,
        function: 'emailSignup',
        params: { email },
      });
      dispatch(emailSignupError(message));
      return;
    }
    if (password !== passwordConfirm) {
      const message = translate('screen.signup.errors.passwordDontMatch');
      recordError(new AuthenticationError(message), {
        file,
        function: 'emailSignup',
        params: { email },
      });
      dispatch(emailSignupError(message));
      return;
    }

    backend
      .signupWithEmail({ email, password })
      .then((result) => {
        dispatch(emailSignupSuccess(result.additionalUserInfo?.providerId, result.user));
        dispatch(
          saveUser({
            uid: result.user.uid,
            providerId: result.user.providerId,
            email: result.user.email,
            emailVerified: result.user.emailVerified,
            displayName: result.user.displayName,
            photoURL: result.user.photoURL,
            isAnonymous: result.user.isAnonymous,
          }),
        );
      })
      .catch((error) => {
        recordError(error, { file, function: 'emailSignup', params: { email } });
        dispatch(emailSignupError(error.toString()));
      });
  };
};

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginStarted = (provider) => ({ type: LOGIN_STARTED, provider });
export const loginSuccess = (provider, user) => ({ type: LOGIN_SUCCESS, provider, user });
export const loginError = (provider, error) => ({ type: LOGIN_ERROR, provider, error });

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(loginStarted());
    if (!isValidEmail(email)) {
      recordError(new AuthenticationError(translate('screen.login.errors.invalidEmail')), {
        file,
        function: 'login',
        params: { email },
      });
      dispatch(loginError(null, translate('screen.login.errors.invalidEmail')));
      return;
    }

    backend
      .loginWithEmail({ email, password })
      .then((result) => {
        dispatch(loginSuccess(result.additionalUserInfo.providerId, result.user));
        dispatch(getUser(result.user.uid));
      })
      .catch((error) => {
        recordError(error, { file, function: 'loginWithEmail', params: { email } });
        dispatch(loginError(null, error.toString()));
      });
  };
};

export const LOGOUT = 'LOGOUT';

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
    // dispatch(navigate('Root', { screen: homeTab.page }));
  };
};

export const PASSWORD_RESET_STARTED = 'PASSWORD_RESET_STARTED';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_ERROR = 'PASSWORD_RESET_ERROR';

export const passwordResetStarted = (provider) => ({ type: PASSWORD_RESET_STARTED, provider });
export const passwordResetSuccess = (provider, user) => ({ type: PASSWORD_RESET_SUCCESS, provider, user });
export const passwordResetError = (error) => ({ type: PASSWORD_RESET_ERROR, provider: 'email', error });

export const passwordReset = (email) => {
  return async (dispatch) => {
    dispatch(passwordResetStarted());

    if (!isValidEmail(email)) {
      recordError(new AuthenticationError('passwordReset.errors.invalidEmail'), {
        file,
        function: 'passwordReset',
        params: { email },
      });
      dispatch(passwordResetError(translate('passwordReset.errors.invalidEmail')));
      return;
    }

    backend
      .passwordReset(email)
      .then(() => {
        dispatch(passwordResetSuccess());
      })
      .catch((error) => {
        recordError(error, { file, function: 'passwordReset', params: { email } });
        dispatch(passwordResetError(error.toString()));
      });
  };
};

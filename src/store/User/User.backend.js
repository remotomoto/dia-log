import firestore from '@react-native-firebase/firestore';
import { recordError } from '~/crashlytics/crashlytics';
import UserError from './UserError';

const getUserDocument = (uid) => {
  return firestore().collection('user').doc(uid);
};

export const getUser = async (uid) => {
  return new Promise((resolve, reject) => {
    const userDocument = getUserDocument(uid);

    userDocument
      .get()
      .then(async (snapshot) => {
        resolve({ uid: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => {
        recordError(error);
        reject(new UserError(error.message(), 'GET-USER-ERROR'));
      });
  });
};

export const saveUser = async (user) => {
  return new Promise((resolve, reject) => {
    getUserDocument(user.uid)
      .set(user)
      .then(() => resolve())
      .catch((error) => {
        recordError(error);
        reject(new UserError(error.message(), 'SAVE-USER-ERROR'));
      });
  });
};

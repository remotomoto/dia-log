import { USER_UID } from '~/store/User/__mocks__/User.backend';

export const authItem = {
  uid: USER_UID,
  email: 'joe@remotomoto.com',
};

export const signupWithEmail = ({ email, password }) => {
  if (password === 'Error@123') {
    return Promise.reject('signupWithEmail error');
  }
  return Promise.resolve(authItem);
};
export const loginWithEmail = () => jest.fn().mockImplementation(() => Promise.resolve({}));
export const loginWithFacebook = () => jest.fn().mockImplementation(() => Promise.resolve({}));
export const loginWithGoogle = () => jest.fn().mockImplementation(() => Promise.resolve({}));
export const logout = () => jest.fn().mockImplementation(() => Promise.resolve({}));

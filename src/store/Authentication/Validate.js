import _ from 'lodash';

export const isValidEmail = (email) => {
  return /^\w+([.\-+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(email);
};

export const isValidPassword = (password) => {
  if (_.isEmpty(password)) {
    return false;
  }
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&^*()\-_+={}[\]"'|;:?~<>,.]).{6,}/.test(password);
};

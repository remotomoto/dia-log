export const statusCodes = {
  SIGN_IN_CANCELLED: 'SIGN_IN_CANCELLED',
};

export const GoogleSignin = {
  configure: jest.fn(),
  hasPlayServices: jest.fn().mockImplementation(() => Promise.resolve(true)),
  signIn: jest.fn().mockImplementation(() => Promise.resolve({})),
};

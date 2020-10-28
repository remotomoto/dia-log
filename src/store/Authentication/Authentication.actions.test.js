import { USER_UID } from '~/store/User/__mocks__/User.backend';

jest.mock('~/store/Authentication/Authentication.backend');
jest.mock('~/crashlytics/crashlytics');

// import { authItem } from '__mocks__/Authentication.backend';

const authItem = {
  uid: USER_UID,
  email: 'joe@remotomoto.com',
};

import * as actions from './Authentication.actions';

describe('store/Authentication/Authentication.actions tests', () => {
  const provider = 'password';
  const error = 'Sample error message';

  test('SIGNUP_STARTED - action', () => {
    const expectedAction = {
      type: actions.SIGNUP_STARTED,
    };

    expect(actions.signupStarted()).toEqual(expectedAction);
  });

  test('EMAIL_SIGNUP_STARTED - action', () => {
    const expectedAction = {
      type: actions.EMAIL_SIGNUP_STARTED,
    };

    expect(actions.emailSignupStarted()).toEqual(expectedAction);
  });

  test('EMAIL_SIGNUP_SUCCESS - action', () => {
    const expectedAction = {
      type: actions.EMAIL_SIGNUP_SUCCESS,
      provider,
    };

    expect(actions.emailSignupSuccess(provider)).toEqual(expectedAction);
  });

  test('EMAIL_SIGNUP_ERROR - action', () => {
    const expectedAction = {
      type: actions.EMAIL_SIGNUP_ERROR,
      error,
    };

    expect(actions.emailSignupError(error)).toEqual(expectedAction);
  });

  test('emailSignup() - action', async () => {
    const resultFn = actions.emailSignup('james@bond.com', 'Test@123', 'Test@123');

    const dispatchFn = jest.fn();
    await resultFn(dispatchFn);

    expect(dispatchFn.mock.calls).toHaveLength(3);
    expect(dispatchFn.mock.calls[0][0].type).toEqual(actions.EMAIL_SIGNUP_STARTED);

    expect(dispatchFn.mock.calls[1][0]).toEqual({
      type: actions.LOGIN_SUCCESS,
      provider,
      user: authItem.user,
    });
  });

  test('emailSignup() - error - invalid email', async () => {
    const resultFn = actions.emailSignup('james.bond.com', 'Error@123', 'Error@123');

    const dispatchFn = jest.fn();
    await resultFn(dispatchFn);

    expect(dispatchFn.mock.calls).toHaveLength(2);
    expect(dispatchFn.mock.calls[0][0].type).toEqual(actions.EMAIL_SIGNUP_STARTED);
    expect(dispatchFn.mock.calls[1][0].type).toEqual(actions.EMAIL_SIGNUP_ERROR);
    expect(dispatchFn.mock.calls[1][0].error).toEqual('Please, provide a valid email');
  });

  test('emailSignup() - error - invalid password', async () => {
    const resultFn = actions.emailSignup('james@bond.com', 'Error123', 'Error123');

    const dispatchFn = jest.fn();
    await resultFn(dispatchFn);

    expect(dispatchFn.mock.calls).toHaveLength(2);
    expect(dispatchFn.mock.calls[0][0].type).toEqual(actions.EMAIL_SIGNUP_STARTED);
    expect(dispatchFn.mock.calls[1][0].type).toEqual(actions.EMAIL_SIGNUP_ERROR);
    expect(dispatchFn.mock.calls[1][0].error).toEqual(
      'Please, ensure that your password have at least 6 characters, including at least one upper case letter, one lower case letter, one digit and one special sharacter',
    );
  });

  test('emailSignup() - error - passwords not matching', async () => {
    const resultFn = actions.emailSignup('james@bond.com', 'Error@123', 'Error123');

    const dispatchFn = jest.fn();
    await resultFn(dispatchFn);

    expect(dispatchFn.mock.calls).toHaveLength(2);
    expect(dispatchFn.mock.calls[0][0].type).toEqual(actions.EMAIL_SIGNUP_STARTED);
    expect(dispatchFn.mock.calls[1][0].type).toEqual(actions.EMAIL_SIGNUP_ERROR);
    expect(dispatchFn.mock.calls[1][0].error).toEqual('Both passwords should match');
  });

  test('emailSignup() - error', async () => {
    const resultFn = actions.emailSignup('james@bond.com', 'Error@123', 'Error@123');

    const dispatchFn = jest.fn();
    await resultFn(dispatchFn);

    expect(dispatchFn.mock.calls).toHaveLength(2);
    expect(dispatchFn.mock.calls[0][0].type).toEqual(actions.EMAIL_SIGNUP_STARTED);
    expect(dispatchFn.mock.calls[1][0].type).toEqual(actions.EMAIL_SIGNUP_ERROR);
    expect(dispatchFn.mock.calls[1][0].error).toEqual('signupWithEmail error');
  });

  test('LOGIN_STARTED - action', () => {
    const expectedAction = {
      type: actions.LOGIN_STARTED,
      provider,
    };

    expect(actions.loginStarted(provider)).toEqual(expectedAction);
  });

  test('LOGIN_SUCCESS - action', async () => {
    const expectedAction = {
      type: actions.LOGIN_SUCCESS,
      provider,
      user: authItem.user,
    };

    expect(actions.loginSuccess(provider, authItem.user)).toEqual(expectedAction);
  });

  test('LOGIN_ERROR - action', () => {
    const expectedAction = {
      type: actions.LOGIN_ERROR,
      provider,
      error,
    };

    expect(actions.loginError(provider, error)).toEqual(expectedAction);
  });

  test('logout() - action', async () => {
    const resultFn = actions.logout();

    const dispatchFn = jest.fn();
    await resultFn(dispatchFn);

    expect(dispatchFn.mock.calls).toHaveLength(1);
    expect(dispatchFn.mock.calls[0][0].type).toEqual(actions.LOGOUT);
    // expect(typeof dispatchFn.mock.calls[1][0]).toEqual('function');

    // const navigationDispatch = jest.fn();
    // await dispatchFn.mock.calls[1][0](navigationDispatch);
    // expect(navigationDispatch.mock.calls).toHaveLength(1);
    // expect(navigationDispatch.mock.calls[0][0].type).toEqual('NAVIGATE');
    // expect(navigationDispatch.mock.calls[0][0].screen).toEqual('Root');
    // expect(navigationDispatch.mock.calls[0][0].params).toEqual({ screen: 'Pray' });
  });
});

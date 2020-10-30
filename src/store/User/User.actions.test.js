jest.mock('@react-native-firebase/firestore');
jest.mock('~/crashlytics/crashlytics');

import { userItem } from './__mocks__/User.backend';
import * as actions from './User.actions';

describe('store/User/User.actions tests', () => {
  const error = 'Sample error message';

  test('SAVE_USER_STARTED - action', () => {
    const expectedAction = {
      type: actions.SAVE_USER_STARTED,
    };

    expect(actions.saveUserStarted()).toEqual(expectedAction);
  });

  test('SAVE_USER_SUCCESS - action', async () => {
    const expectedAction = {
      type: actions.SAVE_USER_SUCCESS,
      user: userItem,
    };

    expect(actions.saveUserSuccess(userItem)).toEqual(expectedAction);
  });

  test('SAVE_USER_ERROR - action', () => {
    const expectedAction = {
      type: actions.SAVE_USER_ERROR,
      error,
    };

    expect(actions.saveUserError(error)).toEqual(expectedAction);
  });

  test('saveUser() - action', async () => {
    const resultFn = actions.saveUser(userItem);

    const dispatchFn = jest.fn();
    await resultFn(
      dispatchFn,
      jest.fn().mockImplementation(() => {
        return {
          authentication: {
            user: {
              language: null,
            },
          },
        };
      }),
    );

    expect(dispatchFn.mock.calls).toHaveLength(1);
    expect(dispatchFn.mock.calls[0][0].type).toEqual(actions.SAVE_USER_STARTED);
  });

  test('saveUser() - error', async () => {
    const resultFn = actions.saveUser({ ...userItem, ...{ uid: 'force_fail' } });

    const dispatchFn = jest.fn();
    await resultFn(
      dispatchFn,
      jest.fn().mockImplementation(() => {
        return {
          authentication: {
            user: {},
          },
        };
      }),
    );

    expect(dispatchFn.mock.calls).toHaveLength(1);
    expect(dispatchFn.mock.calls[0][0].type).toEqual(actions.SAVE_USER_STARTED);
  });
});

// jest.mock('~/crashlytics/crashlytics');

import { makeStore } from '~/store/config';
import reducer, { initialState } from './Authentication';

import { EMAIL_SIGNUP_STARTED, LOGIN_STARTED, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './Authentication.actions';

describe('store.Authentication tests', () => {
  const error = 'Test error message';
  const provider = 'google';
  makeStore();

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle EMAIL_SIGNUP_STARTED', () => {
    const state = reducer({ ...initialState, error: 'Sample error' }, { type: EMAIL_SIGNUP_STARTED });

    expect(state).toBeDefined();
    expect(state.error).toBeNull();
  });

  test('should handle LOGIN_STARTED', () => {
    const state = reducer({ ...initialState, error: 'Sample error' }, { type: LOGIN_STARTED });

    expect(state).toBeDefined();
    expect(state.error).toBeNull();
  });

  test('should handle LOGIN_SUCCESS', () => {
    const state = reducer(undefined, { type: LOGIN_SUCCESS, provider });

    expect(state).toBeDefined();
    expect(state.error).toBeNull();
    expect(state.provider).toEqual(provider);
  });

  test('should handle LOGIN_ERROR', () => {
    const state = reducer(undefined, { type: LOGIN_ERROR, error, provider });

    expect(state).toBeDefined();
    expect(state.provider).toEqual(provider);
    expect(state.error).toEqual(error);
  });

  test('should handle LOGOUT', () => {
    expect(reducer(undefined, { type: LOGOUT })).toEqual(initialState);
  });
});

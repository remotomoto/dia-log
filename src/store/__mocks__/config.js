import configureMockStore from 'redux-mock-store';

const { middleware, makeStore } = jest.requireActual('../config');

export { makeStore as makePersistedStore, makeStore };

export const mockStore = (options = {}) => {
  const _initialState = options.initialState || {};
  const _middleware = options.middleware || middleware;
  const _mockStore = configureMockStore(_middleware);

  return {
    store: _mockStore(_initialState),
  };
};

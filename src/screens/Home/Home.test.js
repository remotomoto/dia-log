jest.mock('~/integrations/analytics');

import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { mockStore } from '~/store/config';

import Home from '.';

const practitioner = require('~/store/__mocks__/practitioner.json');

const actions = {
  logout: jest.fn(),
  navigate: jest.fn(),
  updateLanguageAndTimeZone: jest.fn(),
};

describe('screens.Home Tests', () => {
  test('Home - default', () => {
    const { store } = mockStore({
      initialState: {
        practitioner: {
          info: practitioner,
        },
      },
    });

    const renderedView = renderer.create(
      <Provider store={store}>
        <Home navigation={{ addListener: jest.fn }} actions={actions} />
      </Provider>,
    );
    expect(renderedView.toJSON()).toMatchSnapshot();
  });
});

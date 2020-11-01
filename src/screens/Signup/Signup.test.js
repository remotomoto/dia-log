import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { makeStore } from '~/store/config';

import { Signup } from '.';

describe('screens.Signup Tests', () => {
  test('Signup - default', async () => {
    const { store } = makeStore();

    const renderedView = renderer.create(
      <Provider store={store}>
        <Signup navigation={{ addListener: jest.fn }} />
      </Provider>,
    );
    expect(renderedView.toJSON()).toMatchSnapshot();
  });
});

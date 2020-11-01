import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { makeStore } from '~/store/config';

import { Profile } from '.';

const props = {
  actions: {
    cancel: jest.fn(),
  },
  navigation: { addListener: jest.fn },
};

describe('screens.Signup Tests', () => {
  test('Signup - default', async () => {
    const { store } = makeStore();

    const renderedView = renderer.create(
      <Provider store={store}>
        <Profile {...props} />
      </Provider>,
    );
    expect(renderedView.toJSON()).toMatchSnapshot();
  });
});

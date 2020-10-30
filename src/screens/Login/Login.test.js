import React from 'react';
import renderer from 'react-test-renderer';

import { Login } from '.';

const props = {
  actions: {
    navigate: jest.fn(),
    login: jest.fn(),
  },
};

const ComponentTest = <Login {...props} />;

describe('screens.LoginScreen Tests', () => {
  test('LoginScreen - default', () => {
    const renderedView = renderer.create(ComponentTest);
    expect(renderedView.toJSON()).toMatchSnapshot();
  });

  test('valide fields inputs', () => {
    const root = renderer.create(ComponentTest).root;

    // Email
    const emailInput = root.findByProps({ placeholder: 'E-mail' });
    expect(emailInput).not.toBe(null);

    // Password
    const passwordInput = root.findByProps({ placeholder: 'Password' });
    expect(passwordInput).not.toBe(null);
  });

  test('has a forgot password link', () => {
    const root = renderer.create(ComponentTest).root;
    const passwordForgot = root.findByProps({ testID: 'passwordForgot' });

    expect(passwordForgot.props.children).toBe('I forgot my password');
  });

  test('has a login button', () => {
    const root = renderer.create(ComponentTest).root;
    const button = root.findByProps({ testID: 'login-button' });

    expect(button.props.text).toContain('Login');
  });
});

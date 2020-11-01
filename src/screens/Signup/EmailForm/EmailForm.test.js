jest.mock('@react-native-firebase/firestore');
import React from 'react';
import { socialNetworkUser } from '@react-native-firebase/firestore';
import renderer from 'react-test-renderer';

import { EmailForm } from './EmailForm';

const props = {
  actions: { cancel: jest.fn(), getReligionList: jest.fn(), getLanguageList: jest.fn() },
};

const ComponentTest = <EmailForm {...props} />;

describe('EmailForm Tests', () => {
  test('EmailForm - default', () => {
    expect(renderer.create(ComponentTest).toJSON()).toMatchSnapshot();
  });

  test('valide fields inputs', () => {
    const root = renderer.create(ComponentTest).root;

    // Email
    const emailInput = root.findByProps({ placeholder: 'E-mail' });
    expect(emailInput).not.toBe(null);

    // Password
    const passwordInput = root.findByProps({ placeholder: 'Password' });
    expect(passwordInput).not.toBe(null);

    // Confirm Password
    const confirmPasswordInput = root.findByProps({ placeholder: 'Confirm your password' });
    expect(confirmPasswordInput).not.toBe(null);
  });

  test('has a continue button', () => {
    const root = renderer.create(ComponentTest).root;
    const button = root.findByProps({ testID: 'continue-button' });

    expect(button.props.text).toContain('Continue');
  });

  test('has a cancel button', () => {
    const root = renderer.create(ComponentTest).root;
    const button = root.findByProps({ testID: 'cancel-button' });

    expect(button.props.children).toBe('Cancel');
  });
});

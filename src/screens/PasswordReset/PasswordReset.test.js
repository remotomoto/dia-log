import React from 'react';
import renderer from 'react-test-renderer';

import { PasswordReset } from '.';

const props = {
  actions: {
    navigate: jest.fn(),
    passwordReset: jest.fn(),
  },
};

const ComponentTest = <PasswordReset {...props} />;

describe('screens.PasswordReset Tests', () => {
  test('PasswordReset - default', () => {
    const renderedView = renderer.create(ComponentTest);
    expect(renderedView.toJSON()).toMatchSnapshot();
  });

  test('validate fields inputs', () => {
    const root = renderer.create(ComponentTest).root;
    const emailInput = root.findByProps({ placeholder: 'E-mail' });
    expect(emailInput).not.toBe(null);
  });
});

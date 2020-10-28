import React from 'react';
import renderer from 'react-test-renderer';

import { Container } from './Container';
import { Text, KeyboardAvoidingView } from 'react-native';
import { colors, themes } from '~/components/styles/common';

describe('components.Container', () => {
  test('Snapshot Test', () => {
    const renderedView = renderer.create(<Container />);

    expect(renderedView.toJSON()).toMatchSnapshot();
  });

  test('Should not have KeyboardAvoidingView', () => {
    const root = renderer.create(<Container />).root;

    const safeAreaView = root.findByProps({ testID: 'safeAreaView' });
    expect(safeAreaView).toBeTruthy();

    const children = safeAreaView.props.children;
    expect(children).toBeTruthy();
  });

  test('Should have SafeArea and KeyboardAvoidingView', () => {
    const root = renderer.create(
      <Container keyboardAvoiding>
        <Text>container</Text>
      </Container>,
    ).root;

    const safeAreaView = root.findByProps({ testID: 'safeAreaView' });
    expect(safeAreaView).toBeTruthy();

    const children = safeAreaView.props.children;
    expect(children).toBeTruthy();
    expect(children.type).toBe(KeyboardAvoidingView);

    const keyboardAvoiding = root.findByProps({ testID: 'keyboardAvoiding' });
    expect(keyboardAvoiding).toBeTruthy();
    expect(keyboardAvoiding.props.children).toBeTruthy();
  });

  test('Should Make Custom Styles', () => {
    const root = renderer.create(<Container theme={themes.alert} />).root;

    const safeAreaView = root.findByProps({ testID: 'safeAreaView' });
    expect(safeAreaView).toBeTruthy();
    expect(safeAreaView.props.style.backgroundColor).toBe(colors.alert);
  });
});

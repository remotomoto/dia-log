import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';

import { TextButton } from './Button';
import { colors } from '~/components/styles/common';

describe('components.Button Tests', () => {
  const onPress = jest.fn();
  test('test render and onPress for TextButton', () => {
    let renderedView;
    renderer.act(() => {
      renderedView = renderer.create(
        <TextButton
          onPress={onPress}
          buttonStyle={{ backgroundColor: colors.main }}
          textStyle={{ color: colors.white }}
          text="Custom Button"
        />,
      );
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Text).props.children).toBe('Custom Button');

    renderer.act(() => {
      renderedView.root.findByType(TouchableOpacity).props.onPress();
    });

    expect(onPress.mock.calls.length).toEqual(1);
  });
});

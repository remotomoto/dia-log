import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import Logo from './Logo';

describe('components.Logo Tests', () => {
  test('default render', () => {
    const renderedView = renderer.create(<Logo label="Label" />);

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Text).props.children).toBe('Label');
  });

  test('white logo render', () => {
    const renderedView = renderer.create(<Logo white />);

    expect(renderedView.toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { themes } from '~/components/styles/common';
import HomeMenuRow from './HomeMenuRow';

describe('components.HomeMenuRow Tests', () => {
  test('default render', () => {
    let renderedView;

    act(() => {
      renderedView = renderer.create(
        <HomeMenuRow icon={faUser} text="Sample text" theme={themes.main} onPress={jest.fn()} />,
      );
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
  });
});

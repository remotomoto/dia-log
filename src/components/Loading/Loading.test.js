import React from 'react';
import renderer from 'react-test-renderer';

import { Loading } from './Loading';

describe('components.Loading', () => {
  test('Snapshot Test', () => {
    const renderedView = renderer.create(<Loading />);

    expect(renderedView.toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import Input, { SearchInput, SelectInput } from './Input';

describe('components.Input Tests', () => {
  test('test render for Input', () => {
    let renderedView;
    renderer.act(() => {
      renderedView = renderer.create(<Input />);
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
  });

  test('test render for SelectInput', () => {
    let renderedView;
    renderer.act(() => {
      renderedView = renderer.create(<SelectInput />);
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
  });

  test('test render for SearchInput', () => {
    let renderedView;
    renderer.act(() => {
      renderedView = renderer.create(<SearchInput onChangeText={jest.fn()} />);
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
  });
});

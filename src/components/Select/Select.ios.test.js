import React from 'react';
import { TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-community/picker';
import renderer, { act } from 'react-test-renderer';

import Select from './Select.ios';

const data = [
  { name: 'Item 1', uid: '00000000-0000-0000-0000-000000000001' },
  { name: 'Item 2', uid: '00000000-0000-0000-0000-000000000002' },
  { name: 'Item 3', uid: '00000000-0000-0000-0000-000000000003' },
  { name: 'Item 4', uid: '00000000-0000-0000-0000-000000000004' },
];

describe('components.Select.ios Tests', () => {
  test('Select.ios - default', () => {
    let renderedView;

    act(() => {
      renderedView = renderer.create(
        <Select
          selectedValue={null}
          selectedLabel={null}
          onValueChange={() => {}}
          data={data}
          placeholder="Please select"
        />,
      );
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
  });

  test('Select.ios - display selector', () => {
    let renderedView;
    renderer.act(() => {
      renderedView = renderer.create(
        <Select
          selectedValue={null}
          selectedLabel={null}
          onValueChange={() => {}}
          data={data}
          placeholder="Please select"
        />,
      );
    });
    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(false);

    renderer.act(() => {
      renderedView.root.findAllByType(TouchableOpacity)[2].props.onPress();
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(true);
  });

  test('Select.ios - select null value', () => {
    const onValueChange = jest.fn((item) => item);
    let renderedView;
    renderer.act(() => {
      renderedView = renderer.create(
        <Select
          selectedValue={null}
          selectedLabel={null}
          onValueChange={onValueChange}
          data={data}
          placeholder="Please select"
        />,
      );
    });
    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(false);

    renderer.act(() => {
      renderedView.root.findAllByType(TouchableOpacity)[2].props.onPress();
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(true);

    renderer.act(() => {
      renderedView.root.findByType(Picker).props.onValueChange(null);
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(true);
    expect(onValueChange.mock.results[0].type).toBe('return');
    expect(onValueChange.mock.results[0].value).toBeDefined();
    expect(onValueChange.mock.results[0].value.uid).toBeNull();
    expect(onValueChange.mock.results[0].value.name).toBe('Please select');

    renderer.act(() => {
      renderedView.root.findAllByType(TouchableOpacity)[0].props.onPress();
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(false);
  });

  test('Select.ios - select value', () => {
    const onValueChange = jest.fn((item) => item);
    let renderedView;
    renderer.act(() => {
      renderedView = renderer.create(
        <Select
          selectedValue={null}
          selectedLabel={null}
          onValueChange={onValueChange}
          data={data}
          placeholder="Please select"
        />,
      );
    });
    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(false);

    renderer.act(() => {
      renderedView.root.findAllByType(TouchableOpacity)[2].props.onPress();
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(true);

    renderer.act(() => {
      renderedView.root.findByType(Picker).props.onValueChange('00000000-0000-0000-0000-000000000003');
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(true);
    expect(onValueChange.mock.results[0].value).toBe(data[2]);

    renderer.act(() => {
      renderedView.root.findAllByType(TouchableOpacity)[0].props.onPress();
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(false);
  });

  test('Select.ios - open and close picker', () => {
    let renderedView;
    renderer.act(() => {
      renderedView = renderer.create(
        <Select
          selectedValue={null}
          selectedLabel={null}
          onValueChange={() => {}}
          data={data}
          placeholder="Please select"
        />,
      );
    });
    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(false);

    renderer.act(() => {
      renderedView.root.findAllByType(TouchableOpacity)[2].props.onPress();
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(true);

    renderer.act(() => {
      renderedView.root.findAllByType(TouchableOpacity)[0].props.onPress();
    });

    expect(renderedView.toJSON()).toMatchSnapshot();
    expect(renderedView.root.findByType(Modal).props.visible).toBe(false);
  });
});

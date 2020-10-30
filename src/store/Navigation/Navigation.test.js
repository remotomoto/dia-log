import reducer from './Navigation';
import { NAVIGATE, GO_BACK } from './Navigation.actions';

describe('store.Navigation tests', () => {
  test('shold return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      screen: null,
      params: null,
    });
  });

  test('shold handle NAVIGATE', () => {
    expect(reducer(undefined, { type: NAVIGATE, screen: 'Home', params: { screen: 'Update' } })).toEqual({
      screen: 'Home',
      params: { screen: 'Update' },
    });
  });

  test('shold handle GO_BACK', () => {
    expect(reducer(undefined, { type: GO_BACK })).toEqual({
      screen: null,
      params: null,
    });
  });
});

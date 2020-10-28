import * as actions from './Navigation.actions';

describe('store.Navigation.actions tests', () => {
  const screen = 'Home';
  const params = { screen: 'Update' };

  test('should create NAVIGATE action', async () => {
    const expectedAction = {
      type: actions.NAVIGATE,
      screen,
      params,
    };

    const resultFn = actions.navigate(screen, params);

    const dispatchFn = jest.fn();
    await resultFn(dispatchFn);

    expect(dispatchFn.mock.calls).toHaveLength(1);
    expect(dispatchFn.mock.calls[0][0]).toEqual(expectedAction);
  });

  test('should create GO_BACK action', async () => {
    const expectedAction = {
      type: actions.GO_BACK,
    };

    const resultFn = actions.goBack();

    const dispatchFn = jest.fn();
    await resultFn(dispatchFn);

    expect(dispatchFn.mock.calls).toHaveLength(1);
    expect(dispatchFn.mock.calls[0][0]).toEqual(expectedAction);
  });
});

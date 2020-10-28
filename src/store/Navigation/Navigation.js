import { GO_BACK, NAVIGATE } from './Navigation.actions';

const initialState = {
  screen: null,
  params: null,
};

const navigationReducer = (state = initialState, action) => {
  if (action.type === NAVIGATE) {
    return {
      ...state,
      ...{
        screen: action.screen,
        params: action.params,
      },
    };
  }

  if (action.type === GO_BACK) {
    return {
      ...state,
      ...{
        screen: null,
        params: null,
      },
    };
  }
  return state;
};

export default navigationReducer;

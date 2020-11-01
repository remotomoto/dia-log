import {
  SAVE_USER_STARTED,
  SAVE_USER_SUCCESS,
  SAVE_USER_ERROR,
  GET_USER_STARTED,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from './User.actions';

import { LOGOUT } from '~/store/Authentication/Authentication.actions';

export const initialState = {
  error: null,
  info: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_STARTED:
    case SAVE_USER_STARTED:
      return {
        ...state,
        error: null,
      };
    case GET_USER_SUCCESS:
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        ...{
          info: { ...action.user },
        },
        error: null,
      };
    case GET_USER_ERROR:
    case SAVE_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default: {
      return state;
    }
  }
};

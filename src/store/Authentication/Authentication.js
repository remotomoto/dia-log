import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  EMAIL_SIGNUP_SUCCESS,
  EMAIL_SIGNUP_STARTED,
  EMAIL_SIGNUP_ERROR,
  LOGOUT,
  PASSWORD_RESET_STARTED,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_ERROR,
} from './Authentication.actions';

export const initialState = {
  isAnonymous: undefined,
  provider: null,
  user: null,
  error: null,
  passwordResetSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_SIGNUP_STARTED:
    case LOGIN_STARTED:
    case PASSWORD_RESET_STARTED:
      return {
        ...initialState,
      };
    case EMAIL_SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...{
          error: null,
          provider: action.provider,
          user: action.user,
        },
      };
    case EMAIL_SIGNUP_ERROR:
    case LOGIN_ERROR:
    case PASSWORD_RESET_ERROR:
      return {
        ...state,
        ...{
          error: action.error,
          provider: action.provider,
          user: null,
          passwordResetSuccess: false,
        },
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        passwordResetSuccess: true,
      };
    default: {
      return state;
    }
  }
};

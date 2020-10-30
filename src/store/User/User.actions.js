import moment from 'moment';
import _ from 'lodash';

import * as backend from './User.backend';
import { recordError } from '~/crashlytics/crashlytics';
import { getLanguage } from '~/i18n/i18n';

const file = 'store/User/User.actions';

export const SAVE_USER_STARTED = 'SAVE_USER_STARTED';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
export const SAVE_USER_ERROR = 'SAVE_USER_ERROR';

export const saveUserStarted = () => ({ type: SAVE_USER_STARTED });
export const saveUserSuccess = (user) => ({ type: SAVE_USER_SUCCESS, user: user });
export const saveUserError = (error) => ({ type: SAVE_USER_ERROR, error });

const doSave = (user, dispatch) => {
  backend
    .saveUser(user)
    .then(() => {
      dispatch(saveUserSuccess(user));
    })
    .catch((error) => {
      recordError(error, { file, function: 'doSave', params: { user: user } });
      dispatch(saveUserError(error));
    });
};

export const saveUser = (user) => {
  return async (dispatch) => {
    dispatch(saveUserStarted());
    doSave(user, dispatch);
  };
};

export const GET_USER_STARTED = 'GET_USER_STARTED';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUserStarted = () => ({ type: GET_USER_STARTED });
export const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, user: user });
export const getUserError = (error) => ({ type: GET_USER_ERROR, error });

export const getUser = (uid) => {
  return async (dispatch) => {
    dispatch(getUserStarted());

    backend
      .getUser(uid)
      .then((user) => {
        if (_.isNil(user)) {
          doSave({ uid, status: 'UNKNOWN' }, dispatch);
        } else {
          dispatch(getUserSuccess(user));
        }
      })
      .catch((error) => {
        recordError(error, { file, function: 'getUser', params: { uid } });
        dispatch(getUserError(error));
      });
  };
};

export const updateLanguageAndTimeZone = () => {
  return async (dispatch, getState) => {
    const user = { ...getState().user.info };

    if (_.isNil(user)) {
      return;
    }

    const appLanguage = getLanguage();
    const utcOffset = moment().utcOffset();
    let hasChange = false;

    if (_.isNil(user.appLanguage) || user.appLanguage.languageTag !== appLanguage.languageTag) {
      user.appLanguage = appLanguage;
      hasChange = true;
    }

    if (_.isNil(user.utcOffset) || user.utcOffset !== utcOffset) {
      user.utcOffset = utcOffset;
      hasChange = true;
    }

    if (hasChange) {
      dispatch(saveUserStarted());
      doSave(user, dispatch);
    }
  };
};

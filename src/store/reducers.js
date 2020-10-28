import { combineReducers } from 'redux';

import { AuthenticationReducer } from './Authentication';
import { UserReducer } from './User';

export default combineReducers({
  authentication: AuthenticationReducer,
  user: UserReducer,
});

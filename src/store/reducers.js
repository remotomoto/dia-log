import { combineReducers } from 'redux';

import { NavigationReducer } from './Navigation';
import { AuthenticationReducer } from './Authentication';
import { UserReducer } from './User';

export default combineReducers({
  navigation: NavigationReducer,
  authentication: AuthenticationReducer,
  user: UserReducer,
});

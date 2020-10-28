import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/lib/constants';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

import rootReducer from '~/store/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    // 'authentication',
    // 'user',
    'someState',
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// in this middleware we can put actions to be called on REHYDRATE
const appStateMiddleware = () => {
  return ({}) => (next) => (action) => {
    if (action.type === REHYDRATE) {
      console.log('store was rehydrated from storage');
    }
    return next(action);
  };
};

export const middleware = [thunk, appStateMiddleware()];

export const makeStore = (options = {}) => {
  const _rootReducer = options.rootReducer || rootReducer;
  const _middleware = options.middleware || middleware;

  return {
    store: createStore(_rootReducer, applyMiddleware(..._middleware)),
  };
};

export const makePersistedStore = (options = {}) => {
  const _persistConfig = options.persistConfig || persistConfig;
  const _rootReducer = options.rootReducer || rootReducer;
  const _middleware = options.middleware || middleware;

  const reducer = persistReducer(_persistConfig, _rootReducer);
  const store = createStore(reducer, composeEnhancers(applyMiddleware(..._middleware)));
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

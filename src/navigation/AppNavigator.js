import React, { useRef, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer, useLinking, getStateFromPath } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';

import { navigationRef } from '~/components/RootNavigation';

import { recordError } from '~/integrations/crashlytics';
import { trackScreenView } from '~/integrations/analytics';

import Authenticated from './Authenticated';
import UnAuthenticated from './UnAuthenticated';

import Loading from '~/components/Loading';
import { themes } from '~/components/styles/common';
import { home } from '~/navigation/screens';

enableScreens();

const file = 'navigation/AppNavigator';
const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const getActiveRouteName = (state) => {
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return `${route.name}.${getActiveRouteName(route.state)}`;
  }

  return route.name;
};

export const AppNavigator = ({ user }) => {
  const previousRouteRef = useRef();
  const [isReady, setIsReady] = useState();
  const [initialState, setInitialState] = useState();

  const { getInitialState } = useLinking(navigationRef, {
    prefixes: ['https://remotomoto.com/', 'remotomoto://'],
    config: {
      Login: 'login',
      SignUp: 'signUp',
      Home: 'home',
    },
    getStateFromPath(path, config) {
      return getStateFromPath(path, config);
    },
  });

  useEffect(() => {
    getInitialState()
      .catch((error) => {
        recordError(error, { file, function: 'getInitialState' });
        Alert.alert('Ooops...', 'We was not able to find what to show you... sorry...');
        setIsReady(true);
      })
      .then((state) => {
        if (state !== undefined) {
          console.log('Initial state', state);
          setInitialState(state);
          setIsReady(true);
        } else {
          setInitialState({ routes: [{ name: home.page, params: null }] });
          setIsReady(true);
        }
      });
  }, [getInitialState]);

  if (!isReady) {
    return <Loading theme={themes.white} />;
  }

  const stack = _.isNil(user) ? <UnAuthenticated /> : <Authenticated />;

  return (
    <NavigationContainer
      ref={navigationRef}
      initialState={initialState}
      onStateChange={(state) => {
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
        const previousRouteName = previousRouteRef.current;
        const currentRouteName = getActiveRouteName(state);

        if (previousRouteName !== currentRouteName) {
          trackScreenView(currentRouteName);
        }

        previousRouteRef.current = currentRouteName;
      }}
    >
      {stack}
    </NavigationContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  user: state.user.info,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

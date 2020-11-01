import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';

import { recordError } from '~/crashlytics/crashlytics';

import Home from '~/screens/Home';

import { home, settings, profile } from '~/navigation/screens';

export const AuthenticatedStack = ({ actions }) => {
  const { Screen, Navigator } = createStackNavigator();

  useEffect(() => {
    messaging()
      .requestPermission()
      .then((authStatus) => {
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          // get token
          messaging()
            .getToken()
            .then((fcmToken) => {
              actions.addFcmToken(fcmToken);
            })
            .catch((error) => {
              recordError(error);
            });
        }
      });
  }, [actions]);

  return (
    <Navigator initialRouteName={home.page}>
      <Screen name={home.screen} component={Home} options={{ headerShown: false }} />
      <Screen name={profile.screen} component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(null, mapDispatchToProps)(AuthenticatedStack);

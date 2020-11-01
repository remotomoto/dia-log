import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/screens/Home';
import Profile from '~/screens/Profile';
import { home, profile } from '~/navigation/screens';

export const AuthenticatedStack = ({ actions }) => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator initialRouteName={home.page}>
      <Screen name={home.screen} component={Home} options={{ headerShown: false }} />
      <Screen name={profile.screen} component={Profile} options={{ headerShown: false }} />
    </Navigator>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(null, mapDispatchToProps)(AuthenticatedStack);

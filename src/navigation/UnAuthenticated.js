import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '~/screens/Login';
import Signup from '~/screens/Signup';
import PasswordReset from '~/screens/PasswordReset';

import { login, signup, passwordReset } from '~/navigation/screens';

export const UnAuthenticatedStack = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator initialRouteName={login.screen}>
      <Screen name={login.screen} component={Login} options={{ headerShown: false }} />
      <Screen name={signup.screen} component={Signup} options={{ headerShown: false }} />
      <Screen name={passwordReset.screen} component={PasswordReset} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default UnAuthenticatedStack;

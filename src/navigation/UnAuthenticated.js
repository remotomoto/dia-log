import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '~/screens/LoginScreen';
import PasswordResetScreen from '~/screens/PasswordResetScreen';
import SignupScreen from '~/screens/SignupScreen';

import { login, passwordReset, signup } from '~/navigation/screens';

export const UnAuthenticatedStack = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator initialRouteName={login.page}>
      <Screen name={login.page} component={LoginScreen} options={{ headerShown: false }} />
      <Screen name={passwordReset.page} component={PasswordResetScreen} options={{ headerShown: false }} />
      <Screen name={signup.page} component={SignupScreen} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default UnAuthenticatedStack;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '~/screens/Login';
// import PasswordResetScreen from '~/screens/PasswordReset';
// import SignupScreen from '~/screens/Singnup';

import { login, passwordReset, signup } from '~/navigation/screens';

export const UnAuthenticatedStack = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator initialRouteName={login.screen}>
      <Screen name={login.screen} component={Login} options={{ headerShown: false }} />
      {/*<Screen name={passwordReset.page} component={PasswordResetScreen} options={{ headerShown: false }} />*/}
      {/*<Screen name={signup.page} component={SignupScreen} options={{ headerShown: false }} />*/}
    </Navigator>
  );
};

export default UnAuthenticatedStack;

import React from 'react';
import { StatusBar } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { setI18nConfig } from '~/i18n/i18n';
import { Provider } from 'react-redux';
import { store, persistor } from '~/store';
import firebase from '@react-native-firebase/app';

import AppNavigator from '~/navigation/AppNavigator';
import Preloader from '~/screens/Preloader';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    setI18nConfig();
    if (!firebase.apps.length) {
      firebase.app('[DEFAULT]');
    }
  }

  componentDidMount() {
    // persistor.purge();
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="default" />
          <Preloader>
            <AppNavigator />
          </Preloader>
        </PersistGate>
      </Provider>
    );
  }
}

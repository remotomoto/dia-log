import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
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
      // const config = {
      //   projectId: 'xxx',
      //   apiKey: 'xxx',
      // };
      // firebase.initializeApp(config);
      firebase.app('[DEFAULT]');
    }
  }

  componentDidMount() {
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

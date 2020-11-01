import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { translate } from '~/i18n/i18n';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Container from '~/components/Container';
import Logo from '~/components/Logo';
import { signup, passwordReset } from '~/navigation/screens';
import { NavigationActions, AuthenticationActions } from '~/store/actions';

import { themes } from '~/components/styles/common';

import styles from './Login.styles';

export const Login = ({ actions, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container keyboardAvoiding>
      <View style={styles.loginView}>
        <Logo label={translate('logo.label')} />
        <View style={styles.formHolder}>
          <View style={styles.loginFormHolder}>
            {!_.isEmpty(errorMessage) && (
              <View style={styles.errorHolder}>
                <Text style={styles.error}>{errorMessage}</Text>
              </View>
            )}
            <View style={styles.emailHolder}>
              <Input
                theme={themes.white}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder={translate('screen.login.placeholders.email')}
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
                returnKeyType="next"
                autoCorrect={false}
              />
            </View>
            <View style={styles.passwordHolder}>
              <Input
                theme={themes.white}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder={translate('screen.login.placeholders.password')}
                autoCompleteType="password"
                textContentType="password"
                autoCapitalize="none"
                secureTextEntry
                returnKeyType="done"
              />
              <Text
                testID="passwordForgot"
                style={styles.passwordForgot}
                onPress={() => {
                  actions.passwordResetStarted();
                  actions.navigate(passwordReset.screen);
                }}
              >
                {translate('screen.login.passwordForgot')}
              </Text>
            </View>
            <View style={styles.buttonHolder}>
              <Button
                onPress={() => actions.login(email, password)}
                testID="login-button"
                text={translate('screen.login.button.label')}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomHolder}>
          <Text>
            <Text style={styles.textSignup} onPress={() => actions.navigate(signup.screen)}>
              {translate('screen.login.signUp')}
            </Text>
          </Text>
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  errorMessage: state.authentication.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      navigate: NavigationActions.navigate,
      login: AuthenticationActions.login,
      passwordResetStarted: AuthenticationActions.passwordResetStarted,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

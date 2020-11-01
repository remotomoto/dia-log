import _ from 'lodash';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { translate } from '~/i18n/i18n';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { themes } from '~/components/styles/common';
import styles from './EmailForm.styles';
import { bindActionCreators } from 'redux';
import { NavigationActions } from '~/store/Navigation';
import { login } from '~/navigation/screens';
import { AuthenticationActions } from '~/store/Authentication';
import { connect } from 'react-redux';

export const EmailForm = ({ actions, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <View style={styles.signupFormHolder}>
      <View style={styles.titleHolder}>
        <Text style={styles.titleText}>{translate('screen.signup.title')}</Text>
      </View>
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
          placeholder={translate('screen.signup.placeholders.email')}
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
          placeholder={translate('screen.signup.placeholders.password')}
          autoCompleteType="password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          returnKeyType="next"
          autoCorrect={false}
        />
      </View>
      <View style={styles.passwordHolder}>
        <Input
          theme={themes.white}
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(text)}
          placeholder={translate('screen.signup.placeholders.passwordConfirm')}
          autoCompleteType="password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          returnKeyType="done"
          autoCorrect={false}
        />
      </View>
      <View style={styles.buttonHolder}>
        <Button
          onPress={() => actions.emailSignup(email, password, passwordConfirm)}
          testID="continue-button"
          text={translate('screen.signup.button.continue')}
        />
      </View>
      <View style={styles.cancelHolder}>
        <View>
          <Text testID="cancel-button" style={styles.textCancel} onPress={actions.cancel}>
            {translate('screen.signup.button.cancel')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  errorMessage: state.authentication.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      cancel: () => NavigationActions.navigate(login.screen),
      emailSignup: AuthenticationActions.emailSignup,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailForm);

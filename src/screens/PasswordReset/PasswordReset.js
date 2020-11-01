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
import { login } from '~/navigation/screens';
import { NavigationActions, AuthenticationActions } from '~/store/actions';

import { themes } from '~/components/styles/common';

import styles from './PasswordReset.styles';

export const PasswordReset = ({ actions, errorMessage, passwordResetSuccess = false }) => {
  const [email, setEmail] = useState('');

  if (passwordResetSuccess) {
    return (
      <Container keyboardAvoiding>
        <View style={styles.passwordResetView}>
          <Logo label={translate('logo.label')} />
          <View style={styles.formHolder}>
            <View style={styles.passwordResetFormHolder}>
              <Text style={styles.title}>{translate('screen.passwordReset.success')}</Text>
            </View>
          </View>
          <View style={styles.bottomHolder}>
            <Text style={styles.textBottom} onPress={() => actions.navigate(login.screen)}>
              {translate('screen.passwordReset.button.back')}
            </Text>
          </View>
        </View>
      </Container>
    );
  }

  return (
    <Container keyboardAvoiding>
      <View style={styles.passwordResetView}>
        <Logo label={translate('logo.label')} />
        <View style={styles.formHolder}>
          <View style={styles.passwordResetFormHolder}>
            {!_.isEmpty(errorMessage) && (
              <View style={styles.errorHolder}>
                <Text style={styles.error}>{errorMessage}</Text>
              </View>
            )}
            <Text style={styles.title}>{translate('screen.passwordReset.title')}</Text>
            <View style={styles.emailHolder}>
              <Input
                theme={themes.white}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder={translate('screen.passwordReset.placeholders.email')}
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
                returnKeyType="next"
                autoCorrect={false}
              />
            </View>
            <View style={styles.buttonHolder}>
              <Button
                onPress={() => actions.passwordReset(email)}
                testID="passwordReset-button"
                text={translate('screen.passwordReset.button.reset')}
                solid
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomHolder}>
          <Text style={styles.textBottom} onPress={() => actions.navigate(login.screen)}>
            {translate('screen.passwordReset.button.cancel')}
          </Text>
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  errorMessage: state.authentication.error,
  passwordResetSuccess: state.authentication.passwordResetSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      navigate: NavigationActions.navigate,
      passwordReset: AuthenticationActions.passwordReset,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordReset);

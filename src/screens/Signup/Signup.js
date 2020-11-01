import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { translate } from '~/i18n/i18n';
import Container from '~/components/Container';
import Logo from '~/components/Logo';
import EmailForm from './EmailForm';
import { AuthenticationActions, NavigationActions } from '~/store/actions';
import styles from './Signup.styles';

export const Signup = ({ navigation, actions }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      actions.signupStarted();
    });

    return unsubscribe;
  }, [actions, navigation]);

  return (
    <Container keyboardAvoiding>
      <View style={styles.signupView}>
        <Logo label={translate('logo.label')} />
        <View style={styles.formHolder}>
          <EmailForm />
        </View>
        <View style={styles.bottomHolder}>
          <Text> </Text>
        </View>
      </View>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      navigate: NavigationActions.navigate,
      signupStarted: AuthenticationActions.signupStarted,
    },
    dispatch,
  ),
});

export default connect(null, mapDispatchToProps)(Signup);

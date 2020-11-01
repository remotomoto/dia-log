import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { faFileAlt, faCommentAlt, faEye } from '@fortawesome/free-regular-svg-icons';

import { translate } from '~/i18n/i18n';
import Container from '~/components/Container';
import Button from '~/components/Button';
import Logo from '~/components/Logo';
import HomeMenuRow from '~/components/HomeMenuRow';
import { NavigationActions, AuthenticationActions } from '~/store/actions';
import { themes } from '~/components/styles/common';

import { settings, profile } from '~/navigation/screens';

import styles from './Home.styles';

export const Home = ({ actions, user }) => {
  return (
    <Container>
      <View style={styles.homeView}>
        <Logo label={translate('logo.label')} />
        <View style={styles.greetinView}>
          <Text style={styles.greetingText}>{translate('screen.home.hello', { name: user.displayName })}</Text>
          <Text style={styles.greetingText}>{translate('screen.home.whatToDo')}</Text>
          <View style={styles.myScheduleHolder}>
            <Button
              onPress={() => actions.navigate(settings.screen)}
              testID="settings-button"
              text={translate('screen.home.button.start')}
            />
          </View>
        </View>
        <View style={styles.menuView}>
          <HomeMenuRow
            icon={faFileAlt}
            text={translate('screen.home.button.profile')}
            theme={themes.white}
            onPress={() => actions.navigate(profile.screen)}
          />
          <HomeMenuRow
            icon={faEye}
            text={translate('screen.home.button.logout')}
            theme={themes.white}
            onPress={() => actions.logout()}
          />
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  user: state.user.info,
  userError: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      navigate: NavigationActions.navigate,
      logout: AuthenticationActions.logout,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

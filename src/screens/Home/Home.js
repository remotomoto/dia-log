import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { faUser, faFileAlt, faCommentAlt, faEye } from '@fortawesome/free-regular-svg-icons';

import { translate } from '~/components/common/i18n';
import Container from '~/components/Container';
import Button from '~/components/Button';
import Logo from '~/components/Logo';
import HomeMenuRow from '~/components/HomeMenuRow';
import { NavigationActions, AuthenticationActions } from '~/store/actions';
import { themes } from '~/components/styles/common';

import { settings, profile } from '~/navigation/screens';

import styles from './Home.styles';

export const Home = ({ actions, practitioner }) => {
  return (
    <Container>
      <View style={styles.homeView}>
        <Logo label={translate('labels.logoText')} />
        <View style={styles.greetinView}>
          <Text style={styles.greetingText}>{`${translate('home.helloDr')} ${practitioner.nameFirst}`}</Text>
          <Text style={styles.greetingText}>{translate('home.howCanWeHelp')}</Text>
          <View style={styles.myScheduleHolder}>
            <Button
              onPress={() => actions.navigate(settings.screen)}
              testID="my-schedule-button"
              text={translate('home.mySchedule')}
            />
          </View>
        </View>
        <View style={styles.menuView}>
          <HomeMenuRow
            icon={faFileAlt}
            text={translate('home.myProfile')}
            theme={themes.white}
            onPress={() => actions.navigate(profile.page)}
          />
          <HomeMenuRow
            icon={faCommentAlt}
            text={translate('home.settings')}
            theme={themes.white}
            onPress={() => actions.navigate(settings.page)}
          />
          <HomeMenuRow
            icon={faEye}
            text={translate('home.logout')}
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
  practitioner: state.practitioner.info,
  practitionerError: state.practitioner.error,
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

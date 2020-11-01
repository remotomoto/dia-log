import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity, ScrollView, Appearance } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import _ from 'lodash';
import Button from '~/components/Button';

import { translate } from '~/i18n/i18n';
import Container from '~/components/Container';
import { NavigationActions, UserActions } from '~/store/actions';
import styles from './Profile.styles';
import Input from '~/components/Input';
import { InputContainer, SelectInput } from '~/components/Input';
import { themes } from '~/components/styles/common';
import moment from 'moment';

export const Profile = ({ user, actions }) => {
  const languages = [
    { uid: 'En', name: 'English' },
    { uid: 'Ru', name: 'Russian' },
  ];

  const [language, setLanguage] = useState(languages[0]);

  const [displayName, setDisplayName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [isDOBVisible, setDOBVisible] = useState(false);

  const maxDate = moment().subtract(18, 'years').toDate();
  const minDate = moment().subtract(100, 'years').toDate();

  useEffect(() => {
    if (_.isNil(user)) {
      return;
    }
    setLanguage(user.language);
    setDisplayName(user.displayName);
    setDateOfBirth(user.dateOfBirth);
  }, [user]);

  const isDarkModeEnabled = () => {
    const colorScheme = Appearance.getColorScheme();
    return !_.isNil(colorScheme) && colorScheme === 'dark';
  };
  const formatDate = (date) => date.locale(language.uid).format('ll');
  const momentFromYYYYMMDD = (date) => moment(date, 'YYYY-MM-DD');
  const momentFromDOB = (date) => momentFromYYYYMMDD(date);
  const formatDOB = (date) => formatDate(momentFromDOB(date));

  return (
    <ScrollView>
      <Container keyboardAvoiding>
        <View style={styles.formHolder}>
          <View style={styles.titleHeader}>
            <Text style={styles.title}>{translate('profile.basic.title')}</Text>
          </View>
          <View style={styles.inputRowHolder}>
            <View style={styles.rowHolder}>
              <View style={styles.inputHolderLeft}>
                <SelectInput
                  labelTop={translate('screen.profile.label.language')}
                  selectedValue={language.uid}
                  selectedLabel={language.name}
                  data={languages}
                  onValueChange={(item) => setLanguage(item)}
                  placeholder={translate('screen.profile.placeholder.language')}
                  theme={themes.main}
                />
              </View>
            </View>
          </View>

          <View style={styles.inputRowHolder}>
            <View style={styles.rowHolder}>
              <InputContainer theme={themes.main} labelTop={translate('screen.profile.label.dateOfBirth')}>
                <TouchableOpacity style={styles.textFieldHolder} onPress={() => setDOBVisible(true)}>
                  <Text style={styles.textField}>{_.isNil(dateOfBirth) ? 'Select date' : formatDOB(dateOfBirth)}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isDarkModeEnabled={isDarkModeEnabled()}
                  isVisible={isDOBVisible}
                  date={_.isNil(dateOfBirth) ? maxDate : moment(dateOfBirth, 'YYYY-MM-DD').toDate()}
                  mode="date"
                  minimumDate={minDate}
                  maximumDate={maxDate}
                  headerTextIOS={translate('screen.profile.label.dateOfBirth')}
                  onConfirm={(date) => {
                    setDOBVisible(false);
                    setDateOfBirth(moment(date).format('YYYY-MM-DD'));
                  }}
                  onCancel={() => setDOBVisible(false)}
                />
              </InputContainer>
            </View>
          </View>

          <View style={styles.inputRowHolder}>
            <View style={styles.rowHolder}>
              <View style={styles.inputHolderLeft}>
                <Input
                  theme={themes.alert}
                  labelTop={translate('screen.profile.label.displayName')}
                  value={displayName}
                  onChangeText={(text) => setDisplayName(text)}
                  keyboardType="default"
                  textContentType="givenName"
                  returnKeyType="next"
                  autoCorrect={false}
                  autoCapitalize="words"
                  blurOnSubmit={false}
                />
              </View>
            </View>
          </View>

          <View style={styles.inputRowHolder}>
            <View style={styles.buttonHolder}>
              <Button
                onPress={() => {
                  const updatedUser = {
                    ...user,
                    displayName,
                    dateOfBirth,
                    language,
                  };
                  actions
                    .saveUser(updatedUser)
                    .then(() => {
                      console.log('save user success');
                    })
                    .catch((err) => {
                      console.log('save user error', err);
                    });
                }}
                solid
                text={translate('screen.profile.button.save')}
              />
            </View>
          </View>
          <View>
            <Text testID="cancel-button" style={styles.textCancel} onPress={actions.cancel}>
              {translate('screen.profile.button.cancel')}
            </Text>
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  user: state.user.info,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      navigate: NavigationActions.navigate,
      saveUser: UserActions.saveUser,
      cancel: NavigationActions.goBack,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

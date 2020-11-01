import { StyleSheet } from 'react-native';

import { colors, spaces, fontSizes, fontFamilies } from '~/components/styles/common';

export default StyleSheet.create({
  signupFormHolder: {},
  titleHolder: {
    alignContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.big,
    color: colors.main,
    paddingBottom: spaces.large,
  },
  subTitleText: {
    textAlign: 'center',
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.normal,
    color: colors.main,
    paddingBottom: spaces.large,
  },
  errorHolder: {
    paddingBottom: spaces.large,
  },
  error: {
    textAlign: 'center',
    fontFamily: fontFamilies.normal,
    fontSize: fontSizes.normal,
    color: colors.alert,
  },
  emailHolder: {},
  passwordHolder: {
    paddingTop: spaces.big,
  },
  buttonHolder: {
    paddingTop: spaces.big,
  },
  cancelHolder: {
    paddingTop: spaces.big,
  },
  textSignup: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.normal,
    color: colors.main,
    textAlign: 'center',
  },
  textCancel: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.medium,
    color: colors.lightGrey,
    textAlign: 'center',
    opacity: 0.8,
  },
});

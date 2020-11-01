import { StyleSheet } from 'react-native';

import { fontSizes, fontFamilies, colors, spaces } from '~/components/styles/common';

export default StyleSheet.create({
  containerEmpty: {
    flex: 1,
  },
  loginView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formHolder: {
    width: '100%',
    paddingHorizontal: spaces.big,
  },
  bottomHolder: {
    paddingBottom: spaces.large,
  },
  textNotAUser: {
    fontSize: fontSizes.normal,
    color: colors.main,
    fontFamily: fontFamilies.normal,
  },
  textSignup: {
    fontSize: fontSizes.normal,
    color: colors.main,
    fontFamily: fontFamilies.bold,
  },
  loginFormHolder: {
    width: '100%',
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
    paddingTop: spaces.large,
  },
  passwordForgot: {
    paddingTop: spaces.small,
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.normal,
    color: colors.main,
    textAlign: 'right',
  },
  buttonHolder: {
    paddingTop: spaces.big,
  },
});

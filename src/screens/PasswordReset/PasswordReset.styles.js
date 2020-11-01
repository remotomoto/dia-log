import { StyleSheet } from 'react-native';

import { fontSizes, fontFamilies, colors, spaces } from '~/components/styles/common';

export default StyleSheet.create({
  containerEmpty: {
    flex: 1,
  },
  passwordResetView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formHolder: {
    width: '100%',
    paddingHorizontal: spaces.big,
  },
  passwordResetFormHolder: {
    width: '100%',
  },
  title: {
    fontFamily: fontFamilies.normal,
    fontSize: fontSizes.medium,
    color: colors.main,
    textAlign: 'center',
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
  buttonHolder: {
    paddingTop: spaces.big,
  },
  bottomHolder: {
    paddingBottom: spaces.large,
  },
  textBottom: {
    fontSize: fontSizes.normal,
    color: colors.main,
    fontFamily: fontFamilies.bold,
  },
});

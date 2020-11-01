import { StyleSheet } from 'react-native';

import { fontSizes, fontFamilies, colors, spaces } from '~/components/styles/common';

export default StyleSheet.create({
  containerEmpty: {
    flex: 1,
  },
  signupView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoHolder: {
    paddingTop: spaces.large,
  },
  formHolder: {
    width: '100%',
    paddingHorizontal: spaces.big,
  },
  bottomHolder: {
    paddingBottom: spaces.huge,
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
});

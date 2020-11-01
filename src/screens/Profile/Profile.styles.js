import { StyleSheet, Platform } from 'react-native';

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
    backgroundColor: colors.lightGrey,
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
  titleHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.main,
    marginBottom: spaces.small,
    // flex: 1,
  },
  inputRowHolder: {
    // flex: 1,
    paddingBottom: spaces.default,
  },
  textFieldHolder: {
    height: 32,
    borderBottomWidth: 1,
    borderBottomColor: colors.main,
    justifyContent: 'center',
  },
  textField: {
    fontFamily: fontFamilies.normal,
    fontSize: fontSizes.normal,
    color: colors.main,
  },
  rowHolder: {
    flexDirection: 'row',
  },
  inputHolderLeft: {
    flex: 1,
    paddingRight: spaces.small,
  },
  inputHolderRight: {
    flex: 1,
    paddingLeft: spaces.small,
  },
  textInput: {
    height: 32,
    paddingVertical: Platform.OS === 'ios' ? 0 : spaces.tiny,
    paddingHorizontal: 0,
    fontFamily: fontFamilies.normal,
    fontSize: fontSizes.normal,
    color: colors.main,
    borderBottomWidth: 1,
    borderBottomColor: colors.main,
  },
});

import { StyleSheet, Platform } from 'react-native';
import { colors, fontFamilies, fontSizes, spaces, getComponentsThemes } from '~/components/styles/common';

export const placeholderTextColor = colors.lightGrey;
export const searchIconColor = colors.main;

const inputTextStyle = {
  fontFamily: fontFamilies.normal,
  fontSize: fontSizes.normal,
};

const inputStyle = {
  ...inputTextStyle,
  paddingVertical: Platform.OS === 'ios' ? spaces.tiny : 0,
  paddingHorizontal: 0,
  borderBottomWidth: 1,
};

const labelStyle = {
  fontFamily: fontFamilies.normal,
  fontSize: fontSizes.small,
};

export default (theme, rows = 3) => {
  const th = getComponentsThemes(theme);

  return StyleSheet.create({
    textInput: {
      ...inputStyle,
      color: th.text,
      borderColor: th.text,
      height: spaces.big,
    },
    multiline: {
      ...inputTextStyle,
      color: th.text,
      height: (fontSizes.normal + spaces.small - 1) * rows,
      padding: spaces.small,
      textAlignVertical: 'top',
    },
    multilineContainer: {
      borderWidth: 1,
      borderColor: th.text,
      borderRadius: spaces.small,
    },
    container: {
      paddingTop: spaces.medium,
    },
    labelBottom: {
      ...labelStyle,
      color: th.text,
      paddingTop: spaces.tiny,
    },
    labelTop: {
      ...labelStyle,
      color: th.text,
      paddingBottom: spaces.tiny,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: th.text,
      borderRadius: spaces.big,
      paddingVertical: spaces.tiny,
      paddingHorizontal: spaces.default,
    },
    searchInput: {
      ...inputTextStyle,
      paddingVertical: Platform.OS === 'ios' ? spaces.tiny : 0,
      flex: 1,
      color: th.text,
    },
    errorContainer: {},
    textError: {
      color: colors.alert,
      fontSize: fontSizes.small,
    },
  });
};

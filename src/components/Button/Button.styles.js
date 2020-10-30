import { colors, spaces, fontSizes, fontFamilies, getComponentsThemes } from '~/components/styles/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  defaultButtonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor: colors.main,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: fontSizes.medium + spaces.tiny,
    paddingVertical: spaces.tiny,
    paddingHorizontal: spaces.small,
    flexDirection: 'row',
  },
  disabled: {
    opacity: 0.5,
  },
  defaultButtonTextStyle: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.large,
    color: colors.main,
    textAlign: 'center',
  },
});

export const getIconButtonStyle = ({ theme, size = spaces.huge, disabled, circular }) => {
  const th = getComponentsThemes(theme);
  const stylesCircular = circular
    ? {
        width: size * 2,
        height: size * 2,
        borderRadius: size,
        borderColor: th.text,
        borderWidth: 1,
      }
    : {};

  return StyleSheet.create({
    default: {
      alignSelf: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: th.backgroundColor,
      opacity: disabled ? 0.5 : 1,
      ...stylesCircular,
    },
    text: {
      color: th.text,
      marginLeft: spaces.tiny,
      fontSize: fontSizes.small,
    },
  });
};

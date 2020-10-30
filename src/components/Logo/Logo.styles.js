import { StyleSheet } from 'react-native';

import { fontSizes, fontFamilies, colors, spaces } from '~/components/styles/common';

const logoStyles = StyleSheet.create({
  logoHolder: {
    paddingTop: spaces.small,
    paddingBottom: spaces.small,
    width: '100%',
  },
  logoImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  logoText: {
    textAlign: 'center',
    color: colors.main,
    fontFamily: fontFamilies.normal,
    fontSize: fontSizes.medium,
    paddingTop: spaces.tiny / 2,
  },
  whiteLogoText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: fontFamilies.normal,
    fontSize: fontSizes.medium,
    paddingTop: spaces.tiny / 2,
  },
});

export default logoStyles;

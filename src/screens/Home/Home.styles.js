import { StyleSheet } from 'react-native';

import { fontSizes, fontFamilies, colors, spaces } from '~/components/styles/common';

export default StyleSheet.create({
  containerEmpty: {
    flex: 1,
  },
  homeView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spaces.large,
  },
  greetinView: {},
  greetingText: {
    fontFamily: fontFamilies.bold,
    color: colors.main,
    fontSize: fontSizes.huge,
    textAlign: 'center',
  },
  myScheduleHolder: {
    paddingTop: spaces.medium,
  },
  menuView: {
    alignItems: 'flex-start',
    width: '100%',
    paddingBottom: spaces.big,
  },
  menuRow: {
    paddingBottom: spaces.default,
  },
  menuItemHolder: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  menuIcon: {
    paddingRight: spaces.default,
    alignSelf: 'center',
  },
  menuText: {
    alignSelf: 'center',
    color: colors.main,
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.medium,
  },
});

import { StyleSheet } from 'react-native';

import { getComponentsThemes } from '~/components/styles/common';
import { fontSizes, fontFamilies, spaces } from '~/components/styles/common';

export default ({ theme }) => {
  const th = getComponentsThemes(theme);

  return StyleSheet.create({
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
      color: th.text,
      fontFamily: fontFamilies.medium,
      fontSize: fontSizes.medium,
    },
  });
};

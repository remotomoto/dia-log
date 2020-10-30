import { StyleSheet } from 'react-native';

import { spaces, fontFamilies, getComponentsThemes, fontSizes } from '~/components/styles/common';

export default ({ theme }) => {
  const th = getComponentsThemes(theme);

  return StyleSheet.create({
    blockStyle: {
      borderBottomColor: th.text,
      borderBottomWidth: 1,
    },
    pickerStyle: {
      paddingLeft: -10,
      marginLeft: 0,
      alignSelf: 'flex-start',
      width: '100%',
      height: spaces.big - 1,
      color: th.text,
      backgroundColor: th.backgroundColor,
      borderBottomColor: th.text,
      borderBottomWidth: 1,
      fontFamily: fontFamilies.normal,
    },
    iconStyle: {
      right: 0,
      bottom: spaces.small,
      position: 'absolute',
      height: spaces.large,
    },
    title: {
      color: th.text,
      fontSize: fontSizes.tiny,
      alignSelf: 'flex-start',
    },
  });
};

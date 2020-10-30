import { StyleSheet } from 'react-native';

import { spaces, fontSizes, fontFamilies, getComponentsThemes, colors } from '~/components/styles/common';

export default ({ theme }) => {
  const th = getComponentsThemes(theme);

  return StyleSheet.create({
    containerEmpty: {},
    container: {
      height: spaces.big,
      backgroundColor: th.backgroundColor,
      justifyContent: 'center',
      color: th.text,
      fontFamily: fontFamilies.normal,
      borderBottomColor: th.text,
      borderBottomWidth: 1,
    },
    overlay: {
      flex: 1,
      width: null,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    topBar: {
      justifyContent: 'space-between',
      backgroundColor: 'rgba(0,0,0,0.1)',
      paddingHorizontal: spaces.medium,
      paddingVertical: spaces.small,
    },
    leftHolder: {
      alignSelf: 'flex-start',
    },
    rightHolder: {
      alignSelf: 'flex-end',
    },
    doneButton: {
      fontSize: fontSizes.normal,
      fontFamily: fontFamilies.bold,
      color: colors.main,
    },
    picker: {
      // padding: spaces.small,
      // borderTopWidth: 0.5,
      backgroundColor: 'white',
    },
    pickerItem: {
      fontFamily: fontFamilies.normal,
    },
    textStyle: {
      color: th.text,
      fontSize: fontSizes.normal,
      fontFamily: fontFamilies.normal,
    },
    iconStyle: {
      right: 0,
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

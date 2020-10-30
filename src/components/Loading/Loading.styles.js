import { StyleSheet } from 'react-native';
import { getComponentsThemes } from '~/components/styles/common';

export default ({ theme }) => {
  const th = getComponentsThemes(theme);

  return StyleSheet.create({
    holder: {
      flex: 1,
      backgroundColor: th.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

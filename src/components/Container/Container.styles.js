import { StyleSheet } from 'react-native';
import { getComponentsThemes } from '~/components/styles/common';

export default ({ theme }) => {
  const th = getComponentsThemes(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: th.backgroundColor,
    },
    containerChildren: {
      flex: 1,
      backgroundColor: th.backgroundColor,
    },
  });
};

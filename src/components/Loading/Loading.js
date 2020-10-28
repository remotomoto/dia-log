import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import getStyles from './Loading.styles';
import { themes, getComponentsThemes } from '~/components/styles/common';

export const Loading = ({ theme = themes.white, testID = 'loading' }) => {
  const styles = getStyles({ theme });
  const th = getComponentsThemes(theme);

  return (
    <View testID={testID} style={styles.holder}>
      <ActivityIndicator size="large" color={th.text} />
    </View>
  );
};

export default Loading;

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { spaces, getComponentsThemes } from '~/components/styles/common';

import getStyles from './HomeMenuRow.styles';

export const HomeMenuRow = React.memo(({ icon, text, theme, onPress }) => {
  const styles = getStyles({ theme });
  const th = getComponentsThemes(theme);

  return (
    <View style={styles.menuRow}>
      <TouchableOpacity style={styles.menuItemHolder} onPress={onPress}>
        <View style={styles.menuIcon}>
          <FontAwesomeIcon icon={icon} size={spaces.medium} color={th.text} />
        </View>
        <Text style={styles.menuText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
});

export default HomeMenuRow;

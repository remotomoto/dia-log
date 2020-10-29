import React from 'react';
import { Text, Image, View } from 'react-native';

import styles from './Logo.styles';

const whiteLogo = require('./images/logo.png');
const defaultLogo = require('./images/logo.png');

export const Logo = ({ white, label }) => {
  const image = white ? whiteLogo : defaultLogo;
  const style = white ? styles.whiteLogoText : styles.logoText;

  return (
    <View style={styles.logoHolder}>
      <Image style={styles.logoImage} source={image} />
      <Text style={style}>{label}</Text>
    </View>
  );
};

export default Logo;

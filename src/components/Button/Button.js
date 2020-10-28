import React from 'react';
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';

import { colors, themes } from '~/components/styles/common';
import styles, { getIconButtonStyle } from './Button.styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export const IconButton = ({
  theme = themes.white,
  onPress,
  icon,
  size,
  color,
  testID,
  disabled,
  circular = false,
  text,
  style,
  textStyle,
}) => {
  const iconButtonStyle = getIconButtonStyle({ theme, size, disabled, circular });
  const buttonStyle = { ...iconButtonStyle.default, ...style };

  return (
    <TouchableOpacity onPress={onPress} testID={testID} disabled={disabled} style={buttonStyle}>
      <FontAwesomeIcon icon={icon} size={size} color={color} />
      {text && <Text style={[iconButtonStyle.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export const TextButton = ({ onPress, text, buttonStyle, textStyle, disabled, testID, loading }) => (
  <TouchableOpacity onPress={onPress} testID={testID} disabled={disabled} style={disabled ? styles.disabled : null}>
    <View style={buttonStyle}>{loading ? <ActivityIndicator /> : <Text style={textStyle}>{text}</Text>}</View>
  </TouchableOpacity>
);

export const Button = ({
  onPress,
  text,
  solid = false,
  border = true,
  action = false,
  loading = false,
  disabled,
  testID,
  style,
  textStyle,
}) => {
  let buttonStyle = { ...styles.defaultButtonStyle, ...style };
  let newTextStyle = { ...styles.defaultButtonTextStyle, ...textStyle };

  if (solid) {
    buttonStyle.backgroundColor = action ? colors.alert : colors.main;
    if (border) {
      buttonStyle.borderColor = colors.white;
    }
    newTextStyle.color = colors.white;
  }

  if (action && border) {
    buttonStyle.borderColor = colors.alert;
  }

  return (
    <TextButton
      onPress={onPress}
      text={text}
      buttonStyle={buttonStyle}
      textStyle={newTextStyle}
      disabled={disabled}
      testID={testID}
      loading={loading}
    />
  );
};

export default Button;

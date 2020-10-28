import { Picker } from '@react-native-community/picker';
import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { spaces, themes, getComponentsThemes } from '~/components/styles/common';
import getStyles from './Select.android.styles';

const Select = ({ theme = themes.white, title, selectedValue, selectedLabel, onValueChange, data, placeholder }) => {
  const text = selectedLabel || placeholder;
  const styles = getStyles({ theme });
  const th = getComponentsThemes(theme);

  return (
    <View style={styles.blockStyle}>
      <Text style={styles.title}>{title}</Text>
      <Picker
        prompt={text}
        mode="dropdown"
        selectedValue={selectedValue}
        style={styles.pickerStyle}
        onValueChange={(selected) => {
          if (selected === null) {
            onValueChange({ uid: null, name: placeholder });
            return;
          }
          onValueChange(data.find((item) => item.uid === selected));
        }}
      >
        <Picker.Item key="" label={placeholder} value={null} />
        {data.map((item) => (
          <Picker.Item key={item.uid} label={item.name} value={item.uid} />
        ))}
      </Picker>
      <FontAwesomeIcon icon={faChevronDown} size={spaces.medium} color={th.icon} style={styles.iconStyle} />
    </View>
  );
};

Select.propTypes = {
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedLabel: PropTypes.string,
  onValueChange: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  placeholder: PropTypes.string,
  style: PropTypes.any,
};

export default Select;

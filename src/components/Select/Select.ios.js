import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Picker } from '@react-native-community/picker';

import { spaces, themes, getComponentsThemes } from '~/components/styles/common';
import getStyles from './Select.ios.styles';

const Select = ({ theme = themes.white, selectedValue, selectedLabel, onValueChange, data, placeholder, style }) => {
  const text = selectedLabel || placeholder;
  const [showPicker, setShowPicker] = useState(false);
  const styles = getStyles({ theme });
  const th = getComponentsThemes(theme);

  return (
    <View style={styles.containerEmpty}>
      <Modal transparent visible={showPicker} animationType="fade">
        <TouchableOpacity activeOpacity={1} onPress={() => setShowPicker(false)} style={styles.overlay} />
        <View style={styles.picker}>
          <View style={styles.topBar}>
            <View style={styles.leftHolder} />
            <TouchableOpacity style={styles.rightHolder} onPress={() => setShowPicker(false)}>
              <Text style={styles.doneButton}>Done</Text>
            </TouchableOpacity>
          </View>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(selected) => {
              // setShowPicker(false);
              if (selected === null) {
                onValueChange({ uid: null, name: placeholder });
                return;
              }
              onValueChange(data.find((item) => item.uid === selected));
            }}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item key="" label={placeholder} value={null} />
            {data.map((item) => (
              <Picker.Item key={item.uid} label={item.name} value={item.uid} />
            ))}
          </Picker>
        </View>
      </Modal>

      <View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => setShowPicker(true)} style={[styles.container, style]}>
          <Text style={styles.textStyle}>{text}</Text>
          <FontAwesomeIcon icon={faChevronDown} size={spaces.medium} color={th.icon} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
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

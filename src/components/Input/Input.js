import React, { useState, useEffect, useRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { themes } from '~/components/styles/common';
import Select from '~/components/Select';
import getStyles, { placeholderTextColor, searchIconColor } from './Input.styles';

const InputContainer = ({ style, theme = themes.main, labelBottom, labelTop, children }) => {
  const styles = getStyles(theme);

  return (
    <View style={style || styles.container}>
      {labelTop && <Text style={styles.labelTop}>{labelTop}</Text>}
      {children}
      {labelBottom && <Text style={styles.labelBottom}>{labelBottom}</Text>}
    </View>
  );
};

const TextArea = React.memo(({ theme = themes.main, labelBottom, labelTop, value, onChangeText, rows }) => {
  const styles = getStyles(theme, rows);

  return (
    <InputContainer theme={theme} labelBottom={labelBottom} labelTop={labelTop}>
      <View style={styles.multilineContainer}>
        <TextInput style={styles.multiline} value={value} multiline onChangeText={onChangeText} />
      </View>
    </InputContainer>
  );
});

const SelectInput = React.memo(
  ({
    selectedValue,
    selectedLabel,
    data = [],
    onValueChange,
    placeholder,
    labelBottom,
    labelTop,
    theme = themes.white,
  }) => (
    <InputContainer theme={theme} labelBottom={labelBottom} labelTop={labelTop}>
      <Select
        selectedValue={selectedValue}
        selectedLabel={selectedLabel}
        data={data}
        onValueChange={onValueChange}
        placeholder={placeholder}
        theme={theme}
      />
    </InputContainer>
  ),
);

const SearchInput = React.memo(({ theme = themes.white, placeholder = '', value, onChangeText, bounceTime = 500 }) => {
  const timeoutId = useRef();
  const styles = getStyles(theme);

  const [textValue, setTextValue] = useState(value);

  const getTextValue = () => textValue;

  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      onChangeText(getTextValue());
    }, bounceTime);
  }, [textValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        value={textValue}
        onChangeText={(input) => setTextValue(input)}
      />
      <FontAwesomeIcon icon={faSearch} color={searchIconColor} />
    </View>
  );
});

export { InputContainer, TextArea, SelectInput, SearchInput };

const Input = ({ theme = themes.main, value, onChangeText, labelBottom, labelTop, mask, error = null, ...props }) => {
  const styles = getStyles(theme);

  const inputProps = {
    style: styles.textInput,
    placeholderTextColor: placeholderTextColor,
    value: value,
    onChangeText: onChangeText,
    ...props,
  };

  let inputElement;

  if (mask && mask.type) {
    const { type, ...options } = mask;
    inputElement = <TextInputMask type={mask.type} options={options} {...inputProps} />;
  } else {
    inputElement = <TextInput {...inputProps} />;
  }

  return (
    <InputContainer theme={theme} labelBottom={labelBottom} labelTop={labelTop}>
      {inputElement}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.textError}>{error}</Text>
        </View>
      )}
    </InputContainer>
  );
};

export default React.memo(Input);

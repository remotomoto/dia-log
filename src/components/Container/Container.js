import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, View } from 'react-native';

import getStyles from './Container.styles';
import { themes } from '~/components/styles/common';

export const Container = ({ children, keyboardAvoiding = false, theme = themes.white, style }) => {
  const styles = getStyles({ theme });

  return (
    <SafeAreaView testID="safeAreaView" style={styles.container}>
      {keyboardAvoiding ? (
        <KeyboardAvoidingView
          testID="keyboardAvoiding"
          style={[styles.containerChildren, style]}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {children}
        </KeyboardAvoidingView>
      ) : (
        <View style={[styles.containerChildren, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default Container;

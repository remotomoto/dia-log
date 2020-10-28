export const themes = {
  white: 'white',
  main: 'main',
  alert: 'alert',
  invertedAlert: 'invertedAlert',
  invertedMain: 'invertedMain',
};

export const colors = {
  black: '#000000',
  white: '#ffffff',
  lightGrey: '#cccccc',
  main: '#395596',
  alert: '#eb5966',
  success: '#22bb33',
  atention: '#ffae42',
};

export const fontSizes = {
  tiny: 12,
  small: 14,
  normal: 16,
  medium: 18,
  large: 20,
  big: 24,
  huge: 30,
};

export const fontWeights = {
  bold: '700',
  medium: '600',
  normal: '400',
  light: '200',
};

export const spaces = {
  tiny: 4,
  small: 8,
  default: 12,
  medium: 16,
  large: 24,
  big: 32,
  extraBig: 48,
  huge: 64,
  extraHuge: 80,
};

export const fontFamilies = {
  normal: 'circular_std_book',
  bold: 'circular_std_bold',
  medium: 'circular_std_medium',
};

export const getComponentsThemes = (theme) => {
  const themesDefault = {
    white: {
      backgroundColor: colors.white,
      text: colors.main,
      button: colors.main,
      icon: colors.main,
    },
    main: {
      backgroundColor: colors.main,
      text: colors.white,
      button: colors.white,
      icon: colors.white,
    },
    alert: {
      backgroundColor: colors.alert,
      text: colors.white,
      button: colors.white,
      icon: colors.white,
    },
    invertedAlert: {
      backgroundColor: colors.white,
      text: colors.alert,
      button: colors.alert,
      icon: colors.alert,
    },
    invertedMain: {
      backgroundColor: colors.white,
      text: colors.alert,
      button: colors.main,
      icon: colors.alert,
    },
  };

  return themesDefault[theme];
};

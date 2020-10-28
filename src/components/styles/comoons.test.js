import { colors, fontSizes } from './common';

describe('styles.commmon', () => {
  test('Theme Colors Object - Required', () => {
    expect(colors.black).toBe('#000000');
    expect(colors.white).toBe('#ffffff');
    expect(colors.lightGrey).toBe('#cccccc');
    expect(colors.main).toBe('#395596');
    expect(colors.alert).toBe('#eb5966');
  });

  test('Theme Fonts Sizes - Required', () => {
    expect(fontSizes.tiny).toBe(12);
    expect(fontSizes.small).toBe(14);
    expect(fontSizes.normal).toBe(16);
    expect(fontSizes.medium).toBe(18);
    expect(fontSizes.large).toBe(20);
    expect(fontSizes.big).toBe(24);
    expect(fontSizes.huge).toBe(30);
  });
});

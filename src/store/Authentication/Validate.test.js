import { isValidEmail, isValidPassword } from './Validate';

describe('isValidEmail Tests', () => {
  test('empty email', () => {
    expect(isValidEmail('')).toBeFalsy();
  });

  test('invalid email (without @)', () => {
    expect(isValidEmail('james.bond.com')).toBeFalsy();
  });

  test('invalid email (without full domain)', () => {
    expect(isValidEmail('james@bond')).toBeFalsy();
  });

  test('invalid email (with illegal characters)', () => {
    expect(isValidEmail('james#12@bond.com')).toBeFalsy();
  });

  test('valid email', () => {
    expect(isValidEmail('james@bond.com')).toBeTruthy();
  });

  test('valid email (with +)', () => {
    expect(isValidEmail('james+007@bond.com')).toBeTruthy();
  });
});

describe('isValidPassword Tests', () => {
  test('empty password', () => {
    expect(isValidPassword('')).toBeFalsy();
  });

  test('invalid password (no upper case)', () => {
    expect(isValidPassword('test')).toBeFalsy();
  });

  test('invalid password (no number)', () => {
    expect(isValidPassword('Test')).toBeFalsy();
  });

  test('invalid password (no special char)', () => {
    expect(isValidPassword('Test123')).toBeFalsy();
  });

  test('invalid password (not enough length)', () => {
    expect(isValidPassword('Te@12')).toBeFalsy();
  });

  test('valid password', () => {
    expect(isValidPassword('Test@123')).toBeTruthy();
  });
});

import AuthenticationError from './AuthenticationError';

describe('AuthenticationError Tests', () => {
  test('Create AuthenticationError', () => {
    const error = new AuthenticationError('This is a sample AuthenticationError', 'AUTH-0000');
    expect(error.name).toBe('AuthenticationError');
    expect(error.code).toBe('AUTH-0000');
    expect(error.message).toBe('This is a sample AuthenticationError');
  });

  test('Throw AuthenticationError', () => {
    expect(() => {
      throw new AuthenticationError('This is a sample AuthenticationError', 'AUTH-0001');
    }).toThrowError(AuthenticationError);
  });
});

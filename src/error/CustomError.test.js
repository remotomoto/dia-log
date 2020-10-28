import CustomError from './CustomError';

describe('CustomError Tests', () => {
  test('Create CustomError', () => {
    const error = new CustomError('Example CustomError', 'CODE-001');
    expect(error.name).toBe('CustomError');
    expect(error.code).toBe('CODE-001');
    expect(error.message).toBe('Example CustomError');
  });

  test('Throw CustomError', () => {
    expect(() => {
      throw new CustomError('Example CustomError', 'CODE-001');
    }).toThrowError(CustomError);
  });
});

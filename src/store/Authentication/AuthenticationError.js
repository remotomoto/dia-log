import CustomError from '~/error/CustomError';

class AuthenticationError extends CustomError {
  constructor(message, code) {
    super(message, code);
    this.name = 'AuthenticationError';
  }
}

export default AuthenticationError;

import CustomError from '~/error/CustomError';

class UserError extends CustomError {
  constructor(message, code) {
    super(message, code);
    this.name = 'UserError';
  }
}

export default UserError;

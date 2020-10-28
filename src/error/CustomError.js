class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
  }

  getMessage = function () {
    return this.message;
  };

  getName = function () {
    return this.name;
  };

  getCode = function () {
    return this.code;
  };

  toString = function () {
    return this.message;
  };
}
export default CustomError;

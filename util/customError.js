class CustomError extends Error {
  constructor(message, code) {
    super(message);
    if(code) {
      this.statusCode = code;
    }
  }
}

module.exports = CustomError;
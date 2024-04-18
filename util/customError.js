// class CustomError extends Error {
//   constructor(message, code) {
//     super(message);
//     if(code) {
//       this.statusCode = code;
//     }
//   }
// }
class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = code || 500; // Default status code is 500
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CustomError;
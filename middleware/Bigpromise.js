// module.exports = func => (req,res,next)=> 
//      Promise.resolve(func(req,res,next)).catch(next)

const CustomError = require("../util/customError");

module.exports = func => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(error => {
    console.error(error);
    if(error instanceof CustomError) {
      res.status(error.statusCode).json({ success:false, message: error.message });
    } else {
      next(error);
    }
  });


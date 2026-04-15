const {StatusCodes} = require('http-status-codes');
const CustomAPIError = require('../errors');

const errorHandler = (err, req, res) => {
  if (err instanceof CustomAPIError) {
  console.log("erro dentro");

    return res.status(err.statusCode).json({ msg: err.message });
  }
  console.log("erro fora");
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
}

module.exports = errorHandler;

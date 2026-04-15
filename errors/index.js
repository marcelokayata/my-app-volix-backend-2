const BadRequestError = require('./bad-requests');
const CustomAPIError = require('./custom-api');
const UnauthenticatedError = require('./unauthenticated');
const NotFoundError = require('./not-found');

module.exports = {
  BadRequestError,
  CustomAPIError,
  UnauthenticatedError,
  NotFoundError
};
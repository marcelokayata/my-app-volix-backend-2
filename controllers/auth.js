const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const { UnauthenticatedError } = require("../errors");

const login = async (req, res) => {

  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new BadRequestError("Invalid Credentials");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const token = user.createToken();

  res.status(StatusCodes.OK).json({ name: user.name, token });

};

const register = async (req, res) => {
  console.log(req.body);
  const user = await User.create(req.body);
  console.log(`Aqui ${user}`);
  const token = user.createToken();
  res.status(StatusCodes.OK).json({ name: user.name, token });
};

module.exports = {
  login,
  register,
};

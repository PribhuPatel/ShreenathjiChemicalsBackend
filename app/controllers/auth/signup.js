const { usersModel } = require('../../schema/auth/users');
const handler = require('../../utils/responseHandler');
const bcrypter = require('../../utils/bcrypter');
// const validator = require('validator');

exports.signup = async (req, res) => {
  const { phone, name, password,type } = { ...req.body };
  // if(!validator.isEmail(name)) return handler.errorMessage(res, 'Not valid email');
  /* first check user exists */
  const isUserExists = await usersModel.findOne({ phone, name });
  if (isUserExists) return handler.errorMessage(res, 'user already exists');
  /* has the password and store it in DB instead plain password */
  const hashPassword = await bcrypter.encryptPassword(password);
  const data = await usersModel.create({ phone,type, password: hashPassword, name });
  res.json(data);
};

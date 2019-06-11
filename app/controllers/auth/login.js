const { usersModel } = require('../../schema/auth/users');
const bcrypter = require('../../utils/bcrypter');
const handler = require('../../utils/responseHandler');
const tokenHandler = require('../../utils/tokenHelper');

exports.login = async (req, res) => {
  const { phone, password } = { ...req.body };
  /* first check user exists or not , if exists check password */
  const userData = await usersModel.findOne({ phone });
  if (!userData) return handler.errorMessage(res, {error:'Invalid Mobile Number'});
  /* now check password */
  const isPasswordValid = await bcrypter.checkPassword(password, userData.password);
  /* send error message if password doesn't match */
  if (!isPasswordValid) return handler.errorMessage(res, {error:'Invalid Password'});
  /* create token wit some data, do not put password in it */
  const token = await tokenHandler.createToken({ id: userData._id ,name:userData.name,type:userData.type});
  handler.yahResponse(res, {token:token,name:userData.name,type:userData.type});
};

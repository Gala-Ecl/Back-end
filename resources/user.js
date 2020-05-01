const { User } = require.main.require("./models");

module.exports.findOne = async ({ body }) => {
  const user = await User.findOne({
    where: { email : body.email, password:body.password },
  });
  return user;
};
module.exports.createOne = async ({ body }) => {
  await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    password: body.password,
    email: body.email,
    tableId:null,
    busId:null,
    volunteerId:null
  });
};
module.exports.deleteOne = async ({ body }) => {
  await User.destroy({ where: { email: body.email } });
};


const { Volunteer } = require.main.require("./models");

module.exports.findOne = async ({ body }) => {
  const volunteer = await Volunteer.findOne({
    where: { id : body.id },
  });
  return volunteer;
};
module.exports.readAll = async () => {
  const volunteers = await Volunteer.findAll();
  return volunteers;
};
module.exports.createOne = async ({ body }) => {
  await Volunteer.create({
    duration: body.duration,
    date: body.date,
    description: body.description,
  });
};
module.exports.deleteOne = async ({ body }) => {
  await Volunteer.destroy({ where: { id: body.id } });
};
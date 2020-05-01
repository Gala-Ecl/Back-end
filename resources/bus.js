const { Bus } = require.main.require("./models");

module.exports.findOne = async ({ body }) => {
  const bus = await Bus.findOne({
    where: { id: body.id },
  });
  return bus;
};
module.exports.readAll = async () => {
  const bus = await Bus.findAll();
  return bus;
};
module.exports.createOne = async ({ body }) => {
  await Bus.create({
    number: body.number,
    date: body.date,
    capacity: body.capacity,
  });
};
module.exports.deleteOne = async ({ body }) => {
  await Bus.destroy({ where: { id: body.id } });
};
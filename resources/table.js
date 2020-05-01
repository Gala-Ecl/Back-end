const { Table } = require.main.require("./models");

module.exports.findOne = async ({ body }) => {
  const table = await Table.findOne({
    where: { id: body.id },
  });
  return table;
};
module.exports.readAll = async () => {
  const tables = await Table.findAll();
  return tables;
};
module.exports.createOne = async ({ body }) => {
  await Table.create({
    letter: body.letter,
    capacity: body.capacity,
  });
};
module.exports.deleteOne = async ({ body }) => {
  await Table.destroy({ where: { id: body.id } });
};
const fs = require("fs");
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


module.exports.readAll = async ({ query }) => {
    console.log("query",query)
    const output = await readFile(`./content/${query.page}.json`)
    return JSON.parse(output)
};
module.exports.modifyOne = async ({ query, body }) => {
    await writeFile(`./content/${query.page}.json`, JSON.stringify(body));
};
module.exports.deleteOne = async ({ body }) => {
//   await Table.destroy({ where: { id: body.id } });
};
'use strict';

const fs = require('fs');
const faker = require('faker');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function editFile(filename) {
  let data = await readFile(filename);
  let obj = JSON.parse(data.toString());

  obj.firstName = faker.name.firstName();
  obj.lastName = faker.name.lastName();

  let err = await writeFile(filename, JSON.stringify(obj));

  if (err) throw err;
  return obj;
}

module.exports = editFile;
'use strict';

const fs = require('fs');
const util = require('util');
const faker = require('faker');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

function editFile(filename) {
  return readFile(filename)
    .then(data => {
      let obj = JSON.parse(data.toString());
      obj.firstName = faker.name.firstName();
      obj.lastName = faker.name.lastName();
      let newData = JSON.stringify(obj);
      return writeFile(filename, newData)
        .then(err => {
          if (err) throw err;
          return JSON.parse(newData);
        });
    });
}

module.exports = editFile;
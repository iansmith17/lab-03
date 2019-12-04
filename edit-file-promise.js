'use strict';

const fs = require('fs');
const util = require('util');
const faker = require('faker');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

function editFile(filename) {
  readFile(filename)
    .then(data => {
      let obj = JSON.parse(data.toString());
      obj.firstName = faker.name.firstName();
      obj.lastName = faker.name.lastName();
      writeFile(filename, JSON.stringify(obj))
        .then(err => {
          if (err) throw err;
          console.log(`${filename} has been successfully edited`);
        });
    });
}

module.exports = editFile;
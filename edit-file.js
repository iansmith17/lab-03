'use strict';

const fs = require('fs');
const faker = require('faker');

function editFile(filename) {
  fs.readFile(filename, (err, data) => {
    let obj = JSON.parse(data.toString());
    obj.firstName = faker.name.firstName;
    obj.lastName = faker.name.lastName;
    fs.writeFile(filename, JSON.stringify(obj), (err) => {
      if(err) throw err;
      console.log(`${filename} has been successfully edited`);
    });
  });
}

module.exports = editFile;
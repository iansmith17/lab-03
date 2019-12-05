'use strict';

const fs = require('fs');
const faker = require('faker');

function editFile(filename) {
  fs.readFile(filename, (err, data) => {
    let obj = JSON.parse(data.toString());
    obj.firstName = faker.name.firstName;
    obj.lastName = faker.name.lastName;
    let newData = JSON.stringify(obj);
    fs.writeFile(filename, newData, (err) => {
      if(err) throw err;
      console.log(`${filename} has been successfully edited`);
    });
  });
}

module.exports = editFile;
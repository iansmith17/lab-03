'use strict';

const editFilePromise = require('../edit-file-promise');
const editFileAsync = require('../edit-file-async');
const path = './files/data/person.json';
const fs = require('fs');

describe('Testing promise implementation', () => {
  it('edits the file successfully', () => {
    fs.readFile(path, (err, data) => {
      editFilePromise(path)
        .then(result => {
          expect(result).toBeDefined();
          expect(result).not.toEqual(JSON.parse(data.toString()));
        });
    });
  });
});

describe('testing async implementation', () => {
  it('edits the file successfully', () => {
    fs.readFile(path, (err, data) => {
      editFileAsync(path)
        .then(result => {
          expect(result).toBeDefined();
          expect(result).not.toEqual(JSON.parse(data.toString()));
        });
    });
  });
});
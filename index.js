'use strict';

const editFile = require('./edit-file-promise');

editFile(process.argv[2]).then(result => {
  console.log(result);
});
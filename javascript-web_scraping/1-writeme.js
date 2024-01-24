#!/usr/bin/node
const fs = require('fs');

const writeFile = (filePath, string) => {
  fs.writeFile(filePath, string, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Archivo escrito exitosamente');
    }
  });
};

const filePath = process.argv[2];
const string = process.argv[3];
writeFile(filePath, string);

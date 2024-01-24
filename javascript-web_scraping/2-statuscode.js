#!/usr/bin/node
const request = require('request');

const statusCode = (url) => {
  request(url, (err, response) => {
    if (!err) {
      console.log('code:', response.statusCode);
    } else {
      console.log('code:', response.statusCode);
    }
  });
};

const url = process.argv[2];
statusCode(url);

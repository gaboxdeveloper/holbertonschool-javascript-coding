#!/usr/bin/node
const request = require('request');

const statusCode = (url) => {
  request(url, (err, response) => {
    if (url) {
      console.log('code:', response.statusCode);
    }
  });
};

const url = process.argv[2];
statusCode(url);

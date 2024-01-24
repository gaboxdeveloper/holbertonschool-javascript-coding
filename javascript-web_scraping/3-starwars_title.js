#!/usr/bin/node
const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request (url, (err, response, body) => {
  if (err){
    console.log(err);
  } else {
    const data = JSON.parse(body)
    const title = data.title
    console.log(title);
  }
});

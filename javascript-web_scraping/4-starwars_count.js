#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const characterId = 18;

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const films = JSON.parse(body).results;
    const filmsWithWedge = films.filter(film =>
      film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)
    );
    console.log(filmsWithWedge.length);
  }
});

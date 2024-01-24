#!/usr/bin/node
const request = require('request');

const statusCode = (url) => {
  request(url, (err, response) => {
    if (url) {
      console.log('code:', response.statusCode)
    }
  });
}

const url = process.argv[2];
statusCode(url);


/* Write a script that display the status code of a GET request.

The first argument is the URL to request (GET)
The status code must be printed like this: code: <status code>
You must use the module request

guillaume@ubuntu:~/$ ./2-statuscode.js https://intranet.hbtn.io/status
code: 200
guillaume@ubuntu:~/$ ./2-statuscode.js https://intranet.hbtn.io/doesnt_exist
code: 404
guillaume@ubuntu:~/$ 
*/
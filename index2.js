// JavaScript source code

"use strict";

var http = require('http');

http.get('http://www.omdbapi.com/?apikey=44269ab5&t=frozen', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
	//alert('Inside the function!');
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});




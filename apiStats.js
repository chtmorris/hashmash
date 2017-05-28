var http = require('http');
require('dotenv').config();
const utils = require('./utils');

// =========
// FUNCTIONS
// =========
const apiStats = () => {
  http.get(utils.apiInfo, (result) => {
    result.setEncoding('utf8');
    result.on('error', (err) => {
      console.error(err);
    });
    result.on('data', (chunk) => {
      const formattedData = JSON.parse(chunk)
      console.log(formattedData);
    });
  })
}

// ================
// FUNCTIONS TO RUN
// ================

apiStats();

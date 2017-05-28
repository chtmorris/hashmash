var http = require('http');
var fs = require('fs');
var _ = require('lodash');
require('dotenv').config();
const utils = require('./utils');

// =========
// VARIABLES
// =========
let result;
let coinInfo = [];

// =========
// FUNCTIONS
// =========

const getMiningProfitability = () => {

  http.get(utils.apiProfitability, function(res){
      var body = '';

      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
          result = JSON.parse(body);
          coinToMine(result.Data)
      });
  }).on('error', function(e){
        console.log("Got an error: ", e);
  });

  // REPEAT CALCULATION EVERY x SECONDS
  // setTimeout( getMiningProfitability, utils.callRate );
}

const coinToMine = (coinStats) => {
  var coinsArray = [];
  console.log('==============================================');
  console.log('NEW DATA SET');
  console.log('==============================================');

  for (var value of coinStats) {
    coinsArray.push(value)
    console.log('Coin:', value.CoinName);
    console.log('ProfitRatio vs BTC:', value.ProfitRatio);
    console.log('Difficulty', value.Difficulty);
    console.log(' ');
  };

  // THIS IS WHERE WE SELECT THE COIN TO MINE
  const coinChosen = _.maxBy(coinsArray, function(o) { return o.ProfitRatio; });
  console.log('Coin chosen: ', coinChosen);
}


// ================
// FUNCTIONS TO RUN
// ================
getMiningProfitability();


// ==============
// UNUSED FOR NOW
// ==============

// Write output to logs
// fs.writeFile("data", result, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//
//     console.log("The file was saved!");
// });

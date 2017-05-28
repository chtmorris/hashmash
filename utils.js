const APIKEY = process.env.APIKEY;

const utils = {
  apiInfo: 'http://www.coinwarz.com/v1/api/apikeyinfo?apikey=' + APIKEY,
  apiProfitability: 'http://www.coinwarz.com/v1/api/profitability/?apikey=' + APIKEY + '&algo=all',
  callRate: 5000,
}

module.exports = utils;

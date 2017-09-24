const axios = require('axios');
const url = 'https://api.blockchain.info/charts/';

module.exports = {

  getMarketPrice: () => {
    return axios.get('/api/charts/marketprice')
      .then(response => response.data)
  }

}
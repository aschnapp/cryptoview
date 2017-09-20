const axios = require('axios');
const url = 'https://api.blockchain.info/charts/';

module.exports = {

  getMarketPrice: () => {
    return axios.get('http://localhost:4000/api/charts/marketprice')
      .then(response => response.data)
  }

}
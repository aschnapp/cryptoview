const express = require('express');
const graphqlHTTP = require('express-graphql');
const request = require('request');
const app = express();

// TODO: Fix GraphQL Endpoint. Schema is not structured correctly
// const schema = require('../graphql/schema/schema.js');

// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));

app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      next();
  });


app.get('/api/charts/marketprice', (req,res) => {
  //Testing out endpoints for now. TODO: Clean up 
  request(' https://api.blockchain.info/charts/market-price', (error, response, body) => {
    if (error) {
      res.status(405).send(error);
    } else {
      res.status(200).send(body);
    }
  });

});


app.listen(4000);
console.log('Listening on 4000...')
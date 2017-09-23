const express = require('express');
const graphqlHTTP = require('express-graphql');
const request = require('request');
const path = require('path');
const app = express();
const serveStatic = require('serve-static');

if (process.env.NODE_ENV === 'production') {
  app.use(serveStatic(path.resolve(__dirname, '../build/')))
}
// TODO: Fix GraphQL Endpoint. Schema is not structured correctly
// const schema = require('../graphql/schema/schema.js');

// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));

app.get('/api/charts/marketprice', (req,res) => {
  //Testing out endpoints for now. TODO: Clean up 
  request(' https://api.blockchain.info/charts/market-price', (error, response, body) => {
    if (error) return res.status(405).send(error);
    res.status(200).send(body);
  });
});

app.listen(4000);
console.log('Listening on 4000...')

const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

// TODO: Fix GraphQL Endpoint. Schema is not structured correctly
// const schema = require('../graphql/schema/schema.js');

// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));

app.listen(4000);
console.log('Listening on 4000...')
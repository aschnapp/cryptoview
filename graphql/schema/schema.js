const fetch = require('node-fetch');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const charts = 'https://api.blockchain.info/charts/'
// GRAPHQL schema and types. TODO: Schema structure is not correct
const ChartType = new GraphQLObjectType({
  name: 'Chart',
  description: 'Chart data',
  
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: data => 
        data.name
    },
    values: {
      type: new GraphQLList(Chart),
      resolve: data =>
        data.values
    }
  })
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Chart Data',
    
    fields: () => ({
      charts: {
        type: ChartType,
        args: {
          name: { type: GraphQLString }
        },
        resolve: (root, args) => fetch(
          `${charts}${args.name}-per-second`
        )
        .then(response => response.json())
      },
    })
  })
})
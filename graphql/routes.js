const express = require('express');

const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const router = express.Router();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers()
});

router.use(graphqlHTTP({
  schema: schema,
  graphiql: true
}));

module.exports = router;

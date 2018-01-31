const GraphQLDate = require('graphql-date');

const query = require('./query');
const mutation = require('./mutation');

module.exports = function resolvers () {
  return {
    Query: query,

    Mutation: mutation,

    Event: {
      users (event) {
        return event.getUsers(); // return
      },
      room (event) {
        return event.getRoom(); // return
      }
    },

    Date: GraphQLDate
  };
};

const ab = require('apollo-boost');
const cache = new ab.InMemoryCache();
const link = new ab.HttpLink({
  uri: 'http://localhost:4000/graphql',
});
const getClient = (token) => {
  return new ab.ApolloClient({
    link,
    cache,
    request: (operation) => {
      if (token) {
        operation.setContext({
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      }
    },
    onError: (e) => {
      console.log('error jhon');
      console.error(e);
    },
  });
};
module.exports = {getClient};

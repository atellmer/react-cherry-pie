/** @flow */
import { ApolloClient, createNetworkInterface } from 'react-apollo';


const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});

networkInterface.use([ {
  applyMiddleware(req, next) {
    const token = JSON.parse(String(localStorage.getItem('token')));

    if (!req.options.headers) {
      req.options.headers = {};
    }

    req.options.headers.authorization = token ? token : null;
    next();
  }
} ]);

const client = new ApolloClient({
  networkInterface
});

export {
  client
};

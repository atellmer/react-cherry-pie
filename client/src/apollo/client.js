/** @flow */
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';


const PORT = 4000;
const networkInterface = createNetworkInterface({
  uri: `http://localhost:${PORT}/graphql`
});

networkInterface.use([ {
  applyMiddleware(req, next) {
    const authToken = JSON.parse(String(localStorage.getItem('token')));

    if (!req.options.headers) {
      req.options.headers = {};
    }

    req.options.headers.authorization = authToken ? authToken : null;
    next();
  }
} ]);

const authToken = JSON.parse(String(localStorage.getItem('token')));
const wsClient = new SubscriptionClient(`ws://localhost:${PORT}/subscriptions`, {
  reconnect: true,
  connectionParams: {
    authToken
  }
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});

export {
  client
};

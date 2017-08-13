/** @flow */
import { ApolloClient } from 'react-apollo';
import { createNetworkInterface } from 'apollo-upload-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

import {
  GRAPHQL_API_ENDPOINT,
  GRAPHQL_API_SUBSCRIPTIONS
} from '../../../config';


const networkInterface = createNetworkInterface({
  uri: GRAPHQL_API_ENDPOINT
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
const wsClient = new SubscriptionClient(GRAPHQL_API_SUBSCRIPTIONS, {
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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';

import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: `wss://redux-style-backend.herokuapp.com/v1alpha1/graphql`,
    options: {
      reconnect: true
    }
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
 (<ApolloProvider client={client}>
   <App />
 </ApolloProvider>),
 document.getElementById('root'));


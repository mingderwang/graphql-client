import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

import App from './App'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'REPLACE_THIS_WITH_YOUR_API_URL' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById('root')
)

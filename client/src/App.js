import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';
import { Todos } from './modules/todo';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Todos />
      </ApolloProvider>
    )
  }
}

export default App;
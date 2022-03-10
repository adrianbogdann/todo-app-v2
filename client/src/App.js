import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';
import { Todos } from './modules/todo';
import { Login, Register } from './modules/auth';
import { Header } from './modules/layout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <div className="center w85">
            <Header />
            <div className="ph3 pv1 background-gray">
              <Routes>
                <Route path="/" element={<Todos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default App;
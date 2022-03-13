import React, { useState } from 'react'
import { ApolloProvider } from 'react-apollo';
import apolloClient from './config/createApolloClient';
import { Todos } from './modules/todo';
import { Login, Register } from './modules/auth';
import { Header, Footer } from './modules/layout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Box } from '@material-ui/core'


const App = () => {


  return (
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <Box component='div' id="mainContainer">
          <Header />
          <Box component='div'>
            <Routes>
              <Route path="/" element={<Todos />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Box>
        </Box>
        <Footer />
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App;
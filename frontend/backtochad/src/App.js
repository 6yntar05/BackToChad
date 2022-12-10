import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';

import Login from './components/Login/Login'
import Card from './components/Chat/Chat'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [token, setToken] = useState(false)

  return (<Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Добро пожаловать в чат BackToChad</h1>
      {!token?<Login setToken={ setToken }/>:<Card />}
    </Container>
  </Container>)
};

export default App;

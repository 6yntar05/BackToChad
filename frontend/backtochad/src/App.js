import React from 'react';

import Container from 'react-bootstrap/Container';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from "./components/Router";

const App = () => {
  return (<Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Добро пожаловать в чат BackToChad</h1>
      <Routing/>
    </Container>
  </Container>)
};

export default App;

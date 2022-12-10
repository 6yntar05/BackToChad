import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Добро пожаловать в чат BackToChad</h1>
      <Form>
        <Form.Group className='form-group'>
          <Form.Label htmlFor='username'>Логин</Form.Label>
          <Form.Control type='text' id='username' name='username' required/>
        </Form.Group>
        <Form.Group className='mb-12'>
          <Form.Label htmlFor='username'>Пароль</Form.Label>
          <Form.Control type='password' id='password' name='password' required/>
        </Form.Group>
        <Button type='submit' variant="primary">Войти</Button>{' '}
        <Button type='submit' variant="secondary">Регистрация</Button>{' '}
      </Form>
    </Container>
  </Container>
);

export default App;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const auth = (e) => {
        e.preventDefault()
        props.onLogin(username, password);
    }
    return (<Form onSubmit={auth}>
        <Form.Group className='form-group'>
            <Form.Label htmlFor='username'>Логин</Form.Label>
            <Form.Control type='text' id='username' name='username' required onChange={e => setUsername(e.target.value)}/>
        </Form.Group>
        <Form.Group className='mb-2'>
            <Form.Label htmlFor='username'>Пароль</Form.Label>
            <Form.Control type='password' id='password' name='password' required onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button type='submit' variant="primary">Войти</Button>{' '}
        <Button type='button' variant="secondary" disabled>Регистрация</Button>{' '}
    </Form>)
};

export default Login

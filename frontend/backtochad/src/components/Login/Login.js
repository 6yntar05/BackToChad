import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useAuth} from "../../contexts/authContext";
import {useLocation, useNavigate} from "react-router-dom";

const Login = (props) => {
    const authContext = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const auth = async (e) => {
        e.preventDefault()
        await authContext.signIn(username, password);
        const backUrl = location.state?.backUrl;
        if(typeof backUrl === "string")
            navigate(backUrl);
        else
            navigate("/");
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
        <Button type='button' variant="secondary" onClick={() => navigate("/register")}>Регистрация</Button>{' '}
    </Form>)
};

export default Login

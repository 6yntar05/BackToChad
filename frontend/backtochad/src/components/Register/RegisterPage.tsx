import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useAuth} from "../../contexts/authContext";
import {useLocation, useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const authContext = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const auth = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await authContext.signUp(username, password);
        const backUrl = (location.state as any)?.backUrl;
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
        <Button type='submit' variant="primary">Зарегистрироваться</Button>
        <Button className="mx-2"type='button' variant="secondary" onClick={() => navigate("/login")}>Войти</Button>
    </Form>)
};

export default RegisterPage

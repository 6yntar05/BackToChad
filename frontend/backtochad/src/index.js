import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {checkLogin, joinToChat, login} from "./api/greeter";

login("TestUser", "SecretPassword228+")
    .then(x => {
        console.log("Login response", x)
        checkLogin(x.token)
            .then(y => console.log("Login check", y))
            .catch(e => console.error("Login check failed", e))
    })
    .catch(e => console.error("Login failed", e));

joinToChat();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

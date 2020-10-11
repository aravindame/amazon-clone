import React, { useState } from 'react';
import { auth } from '../config/Firebase';
import { Link, useHistory } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const onClickLogin = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth)=>{
            history.push('/');
        }).catch(e=>alert(e.message));
    }

    const onClickRegister = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            history.push('/');
        }).catch(e=>alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src={URL}
                    alt="login logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" />
                </form>
                <button className="login__signIn" onClick={onClickLogin} type="submit">Sign in</button>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className="login__register" onClick={onClickRegister}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default LoginPage;

const URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png";
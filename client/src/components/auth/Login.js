import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

import './Login.scss';

const Login = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if(isAuthenticated){
            props.history.push("/");
        }
        if(error === 'Invalid Credentials'){
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const  [user, setUser] = useState({
        email: '',
        password: '',
    });

    const {email, password} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(email === '' || password === ''){
            setAlert("Lutfen bosluklari doldurunuz.", "danger");
        }
        else{
            login({
                email,
                password
            });
        }
    }

    return(
        <div className='form-container text-center'>
            
            <form onSubmit={onSubmit} className="form-signin">
            <h1 className="" style={{}} >
                Giriş Yap
            </h1>
                <div className="form-group">
                    
                    <input type="email" name="email" className="form-control" autoFocus value={email} onChange={onChange} required placeholder="E-Posta"/>
                    
                </div>
                <div className="form-group">
                    
                    <input type="password" name="password" className="form-control" value={password} onChange={onChange} required placeholder="Şifre"/>
                    
                </div>
                
                <input type="submit" value="Giriş Yap" className="btn btn-lg btn-block loginButton"/>
            </form>
        </div>
    )
}

export default Login;
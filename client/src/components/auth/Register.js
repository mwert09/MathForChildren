import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

import './Register.scss';

const Register = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if(isAuthenticated){
            props.history.push("/");
        }
        if(error === 'User already exists '){
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const  [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === "" || password === ""){
            setAlert("Lutfen bos birakmayiniz.", 'danger');
        }
        else if(password !== password2){
            setAlert("Sifreler ayni degil", 'danger');
        }
        else{
            register({
                name,
                email,
                password
            });
        }
       
    }

    return(
        <div className='form-container text-center'>
            <h1 className="h3 mb-3 font-weight-normal">
                Kayit Ol
            </h1>
            <form onSubmit={onSubmit} className="form-signin">
                <div className="form-group">
                    
                    <input type="text" name="name" className="form-control" value={name} onChange={onChange} required placeholder="İsim"/>
                </div>
                <div className="form-group">
                    
                    <input type="email" name="email" className="form-control" value={email} onChange={onChange} required placeholder="E-Posta"/>
                </div>
                <div className="form-group">
                   
                    <input type="password" name="password" className="form-control" value={password} placeholder="Şifre" onChange={onChange} required minLength="6"/>
                </div>
                <div className="form-group">
                    
                    <input type="password" name="password2" className="form-control" value={password2} placeholder="Şifre Tekrar" onChange={onChange} required minLength="6"/>
                </div>
                <input type="submit" value="Kayıt Ol" className="btn btn-lg btn-block RegisterButton"/>
            </form>
        </div>
    )
}

export default Register;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';
import useToken from "../../services/useToken";
import { Header } from '../../components/Header/Header';

export const Login = (props) => {

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });

    const {removeToken} = useToken();

    const navigate = useNavigate();

    function handleChange(event){
        const {value, name} = event.target
        setLoginForm(prevNote => ({
            ...prevNote, [name]: value
        })
    )};

    function btnLogin(event) {
        axios({
            method: "POST",
            url: "http://localhost:5000/login/token",
            data:{
                email: loginForm.email,
                password: loginForm.password,
            }
        }).then(
            (response) =>{
                console.log(response)
                props.setToken(response.data.access_token)
                alert('Successfully login');
                localStorage.setItem('email', loginForm.email)
                navigate('/home');

            } 
        ).catch(
            (error) => {
                if (error.response) {
                    console.log(error.response)
                    alert("Erro");
                }
            }
        )
        event.preventDefault();
    };

    return (
        <div>
            <Header token={removeToken}/>
            <section className='container'>
                <form>
                    <p>Login</p>
                    <div>
                        <input type='email' value={loginForm.email} text={loginForm.email} onChange={handleChange} name='email' id='email' placeholder='informe um email'></input>               
                    </div>

                    <div>          
                    <input type='password' value={loginForm.password} text={loginForm.password} onChange={handleChange} name='password' id='password' placeholder='informe sua senha'></input>
                    </div>

                    <div>
                        <button type="button" onClick={btnLogin}>Login</button>
                    </div>

                </form>
            </section>
        </div>
    )
};

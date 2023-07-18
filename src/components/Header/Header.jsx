import React, {} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Header.css';

export const Header = (props)=>{

    const navigate = useNavigate();

    function logMeOut(){
        axios({
            method: "POST",
            url: "http://localhost:5000/logout",
        }).then(
            (response) =>{
                props.token();
                localStorage.removeItem('email')
                navigate('/login');
            } 
        ).catch(
            (error) => {
                if (error.response) {
                    console.log(error.response)
                    alert("Erro");
                }
            }
        )
    }
    const logged = localStorage.getItem('email') ;

    return(
        <header className="header">
            <nav>
                <ul>
                    {logged? <a href="/profile">Perfil</a>:''}
                    {logged? <a href="/login" onClick={logMeOut}>Sair</a>: <a href="/login">Entre</a>}
                    
                </ul>
            </nav>
        </header>  
    );
};

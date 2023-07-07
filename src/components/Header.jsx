import React, {} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Header(props){

    const navigate = useNavigate();

    function logMeOut(){
        axios({
            method: "POST",
            url: "http://localhost:5000/logout",
        }).then(
            (response) =>{
                props.token();
                localStorage.removeItem('email')
                navigate('/');
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

    const logged = localStorage.getItem('email');

    return(
        <nav>
            <div>
                <a href="#">Rafa</a>
                <button>
                        Botao
                </button>
                <div>
                    <ul>
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Sobre
                            </a>
                        </li>
                    </ul>
                    {!logged? 
                    <button type="submit">Login</button>
                    :<button type="submit" onClick={logMeOut}>Logout</button>
                    }
                    
                </div>
            </div>
        </nav>
    );
}

export default Header;

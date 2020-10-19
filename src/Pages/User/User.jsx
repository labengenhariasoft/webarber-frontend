import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './SignIn';
import Log from './Login';
import webarber from "../../images/webarber.png";
import './User.css';

export default function User() {
    // Hooks
    const [tab, setTab] = useState('login');

    const handleClick = (event) => {
        setTab(!tab)
    }

    function renderComponente(componente) {
        return {
            "login": <Log/>,
            "cadastro": <Register/>
        }[componente]
    }

    return (<div>
                <div className="row">
                </div>
                <div className="container">
                    <div className='row'>
                        <div className="card">
                            <div className="card-header">
                                <Link to="/">
                                    <img className="card-img-top-center" src={webarber} alt="webarber logo" style={{ width: "310px", height: "90px" }}></img>
                                </Link>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className={`col ${tab === "login"? "active" : "disabled"}`} onClick={() => setTab("login")}>
                                        Entrar
                                    </div>
                                    <div className={`col ${tab === "cadastro"? "active" : "disabled"}`} onClick={() => setTab("cadastro")}>
                                        Cadastrar
                                    </div>
                                </div>
                                <br/>
                                <div className="container">
                                    {renderComponente(tab)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
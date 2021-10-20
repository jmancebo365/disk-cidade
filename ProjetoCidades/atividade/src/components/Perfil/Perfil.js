import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header.js';
import './Perfil.css';
import {NavLink} from 'react-router-dom';



const Perfil = () => {

    return (
        <div>
        <Header />
        <div className="Perfil">
            <h1>Perfil</h1>
            <img className="icon" src="https://profissaopilates.com.br/wp-content/uploads/2019/03/avatar-icon.png" />
        <p > Nome: </p>
        <p> Email: </p>
        <p> Cidade: </p>
        <p> UF: </p>
        <NavLink to="/login" exact><input type="button" value="Deslogar"/></NavLink>
        </div>
        </div>
    )
}

export default Perfil;
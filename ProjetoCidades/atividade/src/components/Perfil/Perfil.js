import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header.js';
import './Perfil.css';
import {NavLink} from 'react-router-dom';
import { UsuarioContext } from '../../context/UsuarioProvider';


const Perfil = () => {

    const{ user } = useContext(UsuarioContext);
    console.log(user);
    if(user != null){
        return (
            <div>
            <Header />
            <div className="Perfil">
                <h2>{user.nome}</h2>
                <img className="icon" src="https://profissaopilates.com.br/wp-content/uploads/2019/03/avatar-icon.png" />
      
            <p> Email: {user.email}</p>
            <p> Cidade: {user.cidadeNatal} </p>
            <p> UF: {user.UFCidadeNatal} </p>
            <NavLink to="/login" exact><input type="button" value="Deslogar"/></NavLink>
            </div>
            </div>
        )
    }
    else{
        return (<p> Carregando </p>)
    }

}


export default Perfil;
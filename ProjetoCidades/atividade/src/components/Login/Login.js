import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { UsuarioContext } from '../../context/UsuarioProvider';

const Login = () =>{

    
    function VerificaLogin(){
        const{ user } = useContext(UsuarioContext);
        if(user != null){
            console.log("ta logado" + user);
        
        }
        else{
            console.log("deu ero");
        }
    }

    return (
        <div className="formulario">
            <h1>Login</h1>
            <form onSubmit={VerificaLogin()}>
                <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <br />
                <div className="form-group" >
                    <input type="password" className="form-control" id="senha" placeholder="Senha" />
                </div>
                <input type="submit" value="Entrar"/>
                <p> <NavLink to="/cadastro" exact>Clique aqui para se cadastrar</NavLink> </p>
            </form>
        </div>
    );
};   


export default Login;
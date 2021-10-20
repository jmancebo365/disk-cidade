import React from 'react';
import {NavLink} from 'react-router-dom';



const Login = () =>{

    return (
        <div className="formulario">
            <h1>Login</h1>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="Email" />
                </div>
                <br />
                <div className="form-group" >
                    <input type="password" class="form-control" id="senha" placeholder="Senha" />
                </div>
                <input type="submit" value="Entrar"/>
                <p> <NavLink to="/cadastro" exact>Clique aqui para se cadastrar</NavLink> </p>
            </form>
        </div>
    );
};   


export default Login;
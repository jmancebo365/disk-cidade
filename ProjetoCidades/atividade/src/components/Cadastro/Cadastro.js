import React from 'react';
import {NavLink} from 'react-router-dom';


const Login = () =>{

    return (
        <div className="formulario">
            <h1>Cadastro</h1>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="nome" placeholder="Nome" />
                </div>
                <br />
                <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="Email" />
                </div>
                <br />
                <div class="form-group">
                    <input type="text" class="form-control" id="telefone" placeholder="Telefone" />
                </div>
                <br />
                <div class="form-group">
                    <input type="text" class="form-control" id="cidadeNatal" placeholder="Cidade" />
                </div>
                <br />
                <div class="form-group">
                    <input type="text" class="form-control" id="UFCidadeNatal" placeholder="UF" />
                </div>
                <br />
                <div className="form-group" >
                    <input type="password" class="form-control" id="senha" placeholder="Senha" />
                </div>
                <input type="submit" value="Cadastrar"/>
                <p> <NavLink to="/login" exact>Clique aqui para se logar</NavLink> </p>

            </form>
        </div>
    );
};   


export default Login;
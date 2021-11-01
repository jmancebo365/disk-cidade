import React from 'react';
import {NavLink} from 'react-router-dom';


const Login = () =>{

    return (
        <div className="formulario">
            <h1>Cadastro</h1>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="nome" placeholder="Nome" />
                </div>
                <br />
                <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <br />
                <div className="form-group">
                    <input type="text" className="form-control" id="telefone" placeholder="Telefone" />
                </div>
                <br />
                <div className="form-group">
                    <input type="text" className="form-control" id="cidadeNatal" placeholder="Cidade" />
                </div>
                <br />
                <div className="form-group">
                    <input type="text" className="form-control" id="UFCidadeNatal" placeholder="UF" />
                </div>
                <br />
                <div className="form-group" >
                    <input type="password" className="form-control" id="senha" placeholder="Senha" />
                </div>
                <input type="submit" value="Cadastrar"/>
                <p> <NavLink to="/login" exact>Clique aqui para se logar</NavLink> </p>

            </form>
        </div>
    );
};   


export default Login;
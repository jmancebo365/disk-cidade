import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
                <li><p className="nomeApp">DiskCidade</p></li>
                <li><img className="logo" alt="logo" src="https://www.jacui.mg.leg.br/imagens/local.png/image" /> </li>
                    <li> <NavLink to="/" exact>Home</NavLink>  </li>
                    <li> <NavLink to="/novasugestao" exact>Nova Sugestão</NavLink> </li>
                    <li> <NavLink to="/perfil" exact>Perfil</NavLink> </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
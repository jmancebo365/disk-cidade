import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="Header">
            <nav>
                <ul>
                    <li> <NavLink to="/" exact>Home</NavLink> </li>
                    <li> <NavLink to="/novasugestao" exact>Nova Sugestao</NavLink> </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
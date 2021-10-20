import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { SugestoesContext } from '../../context/SugestoesProvider';
import Sugestao from './Sugestao/Sugestao';
import Header from '../../components/Header/Header.js';

const Sugestoes = () =>{
    const{ sugestoes } = useContext(SugestoesContext);

    return (
    <div>
    <Header />
    {sugestoes != null ? sugestoes.map((sugestao, index) => {
        console.log(sugestao.id);
        return(
            
            <Link style={{ textDecoration: 'none' }} to={"/sugestoes/" + sugestao.idSugestao} key={index}>
                <Sugestao sugestao={sugestao}
                      />
            </Link>
        );
    }) : console.log("null")}
    </div>
    );
};   


export default Sugestoes;
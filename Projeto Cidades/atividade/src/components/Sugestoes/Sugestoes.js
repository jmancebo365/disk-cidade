import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { SugestoesContext } from '../../context/SugestoesProvider';
import Sugestao from './Sugestao/Sugestao'

const Sugestoes = () =>{
    const{ sugestoes } = useContext(SugestoesContext);

    return (
<div>
    {sugestoes != null ? sugestoes.map((sugestao, index) => {
        console.log(sugestao.id);
        return(
            <Link style={{ textDecoration: 'none' }} to={"/sugestoes/" + sugestao.idSugestao} key={sugestao.idSugestao}>
                <Sugestao sugestao={sugestao}
                      />
            </Link>
        );
    }) : console.log("null")}
    </div>
    );
};   


export default Sugestoes;
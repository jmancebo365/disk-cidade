import React from 'react'
import './Sugestao.css'

const Sugestao = (props) => {
    return(
        <div className="Sugestao">
            <h1> {props.sugestao.titulo} </h1>
            <p>{props.sugestao.descricao}</p>
            <img src={props.sugestao.urlImagem} /> 
            <p> {props.sugestao.cidade} - {props.sugestao.UF}</p>
            <p> Por {props.sugestao.usuario} as {props.sugestao.data}</p>
        </div>
    );
}
export default Sugestao;
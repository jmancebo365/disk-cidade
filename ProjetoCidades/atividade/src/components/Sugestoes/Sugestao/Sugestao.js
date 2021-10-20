import React from 'react'
import './Sugestao.css'

const Sugestao = (props) => {
    var myDate = new Date(props.sugestao.data.toString());
    var data =  myDate.getDate()  + '/' +(myDate.getMonth() + 1) + '/' + myDate.getFullYear();

    return(
        <div className="Sugestao">
            <div className="linha">
            <img className="icon" src="https://profissaopilates.com.br/wp-content/uploads/2019/03/avatar-icon.png" />
            <div ><p className="nomeUsuario">{props.sugestao.usuario} </p>
            <p>{props.sugestao.cidade} - {props.sugestao.UF}  </p> </div>
            </div>
            <div className="escrita">
                <h3> {props.sugestao.titulo} </h3>
                <p className="descricao">{props.sugestao.descricao}</p>
            </div>
            <img className="imgSugestao" src={props.sugestao.urlImagem} /> 
            <p> {data}</p>
        </div>
    );
}
export default Sugestao;
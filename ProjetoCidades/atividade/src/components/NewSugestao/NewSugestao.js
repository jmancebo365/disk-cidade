import React, {useContext} from 'react';
import './NewSugestao.css';
import { SugestoesContext } from '../../context/SugestoesProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header/Header.js';


const NewSugestao = () => {

    const{ onSugestoesSubmit } = useContext(SugestoesContext);

    return (
        <div>
        <Header />
        <div className="formulario">
            <h1>Nova Sugestão</h1>
            <form onSubmit={onSugestoesSubmit}>
            <div className="form-group" >
                <input type="email" class="form-control" id="titulo" placeholder="Titulo" />
            </div>
            <br />
         
            <div class="form-group">
                <input type="email" class="form-control" id="cidade" placeholder="Cidade" />
                <br />
                <select class="form-control" id="uf">
                <option>SP</option>
                <option>MG</option>
                <option>AL</option>
                <option>BA</option>
                <option>CE</option>
                </select>
            </div>
            <br />
            <div class="form-group">
                <textarea class="form-control" id="descricao" rows="3" placeholder="Escreva sua sugestão..."></textarea>
            </div>
            <br />
            <div className="form-group" >
                <input type="email" class="form-control" id="urlImagem" placeholder="URL Imagem" />
            </div>
            <input type="submit" value="Cadastrar"/>
            </form>


          
        </div>
        </div>
    )
}

export default NewSugestao;
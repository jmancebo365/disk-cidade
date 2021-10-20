import React, {useContext} from 'react';
import './NewSugestao.css';
import { SugestoesContext } from '../../context/SugestoesProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


const NewSugestao = () => {

    const{ onSugestoesSubmit } = useContext(SugestoesContext);

    return (
        <div className="formulario">
            <h1>Nova Sugestão</h1>
            <form onSubmit={onSugestoesSubmit}>
            <div className="form-group" >
                <label for="exampleFormControlInput1">Titulo</label>
                <input type="email" class="form-control" id="titulo" placeholder="Lombada na rua 13" />
            </div>
         
            <div class="form-group">
                <label for="exampleFormControlSelect1">UF</label>
                <select class="form-control" id="uf">
                <option>SP</option>
                <option>MG</option>
                <option>AL</option>
                <option>BA</option>
                <option>CE</option>
                </select>
                <label for="exampleFormControlInput1">Cidade</label>
                <input type="email" class="form-control" id="cidade" placeholder="Valinhos" />
            </div>
        
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Descrição</label>
                <textarea class="form-control" id="descricao" rows="3"></textarea>
            </div>
            <div className="form-group" >
                <label for="exampleFormControlInput1">Url Imagem</label>
                <input type="email" class="form-control" id="urlImagem" placeholder="url" />
            </div>
            <input className="btn" type="submit" value="Cadastrar" />
            </form>


          
        </div>
    )
}

export default NewSugestao;
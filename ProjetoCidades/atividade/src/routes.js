import { Switch, Route } from 'react-router-dom';
import Sugestoes from './components/Sugestoes/Sugestoes.js';
import FullSugestao from './components/FullSugestao/FullSugestao.js';
import NewSugestao from './components/NewSugestao/NewSugestao.js';
import Login from './components/Login/Login.js';
import Cadastro from './components/Cadastro/Cadastro.js';
import Perfil from './components/Perfil/Perfil.js';


const routes = () => {
    return(

                <Switch>
                    <Route path="/" exact>
                        <Sugestoes />
                    </Route>
                    <Route path="/novaSugestao" exact>
                        <NewSugestao />
                    </Route>
                    <Route path="/cadastro" exact>
                        <Cadastro />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/sugestoes/:idSugestao" exact>
                        <FullSugestao />
                    </Route>
                    <Route path="/perfil" exact>
                        <Perfil />
                    </Route>
                    <Route render={() => <div> Página não encontrada </div>} />
                </Switch>
    );
};

export default routes;
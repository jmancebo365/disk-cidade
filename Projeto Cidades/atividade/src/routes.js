import { Switch, Route } from 'react-router-dom';
import Sugestoes from './components/Sugestoes/Sugestoes.js';
import FullSugestao from './components/FullSugestao/FullSugestao.js';
import NewSugestao from './components/NewSugestao/NewSugestao.js';
   

const routes = () => {
    return(

                <Switch>
                    <Route path="/" exact>
                        <Sugestoes />
                    </Route>
                    <Route path="/novaSugestao" exact>
                        <NewSugestao />
                    </Route>
                    <Route path="/sugestoes/:idSugestao" exact>
                        <FullSugestao />
                    </Route>
                    <Route render={() => <div> Página não encontrada </div>} />
                </Switch>
    );
};

export default routes;
import './App.css';
import { BrowserRouter  } from 'react-router-dom';
import SugestoesProvider from './context/SugestoesProvider';
import UsuarioProvider from './context/UsuarioProvider';
import Routes from './routes';


function App() {
    
    return  (
      <div className="App">
        <BrowserRouter>
        <UsuarioProvider>
          <SugestoesProvider>
            <Routes />
          </SugestoesProvider>
          </UsuarioProvider>
        </BrowserRouter>
      </div>
    );
    
  
}

export default App;

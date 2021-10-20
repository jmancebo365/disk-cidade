import './App.css';
import { BrowserRouter  } from 'react-router-dom';
import SugestoesProvider from './context/SugestoesProvider';
import Routes from './routes';


function App() {
    
    return  (
      <div className="App">
        <BrowserRouter>
          <SugestoesProvider>
            <Routes />
          </SugestoesProvider>
        </BrowserRouter>
      </div>
    );
    
  
}

export default App;

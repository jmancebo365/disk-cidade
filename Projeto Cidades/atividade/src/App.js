import './App.css';
import { BrowserRouter } from 'react-router-dom';
import SugestoesProvider from './context/SugestoesProvider';
import Routes from './routes';
import Header from './components/Header/Header.js';

function App() {
 
    return  (
      <div className="App">
        <BrowserRouter>
          <Header />
          <SugestoesProvider>
            <Routes />
          </SugestoesProvider>
        </BrowserRouter>
      </div>
    );
    
  
}

export default App;

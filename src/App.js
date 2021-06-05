import { GlobalProvider } from './context/globalContext';
import Routes from './routes/routes';

import './styles/reset.css'
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Routes />
      </GlobalProvider>
    </div>
  );
}

export default App;

import { GlobalProvider } from './context/globalContext';
import Routes from './routes/routes';

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

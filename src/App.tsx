import { Drawer } from './components/Drawer';
import { Login } from './pages/login';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Login>
          <Drawer>
            <Routes />
          </Drawer>
        </Login>
      </BrowserRouter>
    </>
  );
}

export default App;

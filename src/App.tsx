import { Drawer } from './components/Drawer';
import { Login } from './pages/login';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ptBR } from '@mui/x-data-grid';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  ptBR
);
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Login>
              <Drawer>
                <Routes />
              </Drawer>
            </Login>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Drawer } from './components/Drawer';
import { Login } from './pages/login';
import Routes from './routes';
import {
  BrowserRouter,
  Route,
  Routes as RoutesReactDom,
} from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ptBR } from '@mui/x-data-grid';
import { RequireAuth } from '@components/RequireAuth';
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
            <SnackbarProvider
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <RoutesReactDom>
                <Route path='/login' element={<Login />} />
              </RoutesReactDom>
              <RequireAuth>
                <Drawer>
                  <Routes />
                </Drawer>
              </RequireAuth>
              <ReactQueryDevtools />
            </SnackbarProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

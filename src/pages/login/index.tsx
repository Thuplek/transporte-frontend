import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import AuthStore from '../../stores/auth';
import { useAuth } from '../../hooks/auth';

interface ILoginProps {
  children: React.ReactNode;
}

export const Login: React.FC<ILoginProps> = ({ children }) => {
  const { token } = AuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const handleSubmit = () => {
    login(email, password);
  };

  if (token) {
    return <>{children}</>;
  }

  return (
    <Box
      width='100vw'
      height='100vh'
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Card>
        <CardContent>
          <Box display={'flex'} flexDirection={'column'} gap={2}>
            <Typography variant='h6' align='center'>
              Login
            </Typography>
            <TextField
              fullWidth
              label='E-mail'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label='Senha'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Box width='100%' display={'flex'} justifyContent={'center'}>
            <Button variant='contained' onClick={handleSubmit}>
              Entrar
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

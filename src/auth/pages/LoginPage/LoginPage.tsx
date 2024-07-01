import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { IoMdUnlock } from 'react-icons/io';

const Login: React.FC = () => {
  return (
    <>
      {/* ============ IMAGE ============ */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: '200px', md: 'auto' },
          backgroundImage: 'url("/login_01.png")',
          backgroundSize: 'cover',
          objectFit: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* ============ FORM CONTAINER ============ */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1f2937',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: { xs: '100%', sm: '80%', md: '75%' },
            p: { xs: 3, sm: 4 },
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <IoMdUnlock />
          </Avatar>

          <Typography component="h1" variant="h5" sx={{ color: '#ffffff' }}>
            Login
          </Typography>
          <Typography
            component="h2"
            variant="body2"
            sx={{ color: '#9ca3af', mb: 2 }}
          >
            See your growth and get consulting support!
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FaGoogle />}
            sx={{ mt: 1, mb: 2, color: '#ffffff', borderColor: '#374151' }}
          >
            Sign in with Google
          </Button>

          <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                style: { color: 'white' },
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                style: { color: 'white' },
              }}
              // InputLabelProps={{
              //   style: { color: 'white' },
              // }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>

          <Box mt={5}>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ color: '#9ca3af' }}
            >
              ©{new Date().getFullYear()} All rights reserved
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;

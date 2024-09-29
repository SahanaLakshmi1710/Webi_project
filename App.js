import React from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#1e1e2d', p: 3, color: '#fff', minHeight: '100vh' }}
      >
        <Typography variant="h4" gutterBottom>
          Overview
        </Typography>
        <Overview />
      </Box>
    </Box>
  );
}

export default App;

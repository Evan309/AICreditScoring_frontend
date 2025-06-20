import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper } from '@mui/material';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

  if (!result) {
    return (
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Typography variant="h5" align="center">No result to display.</Typography>
        <Button onClick={() => navigate('/')} variant="contained" sx={{ mt: 2 }}>Back to Form</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
          Your Credit Score Result
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography variant="h5" color="primary" fontWeight={600}>
            {result.score}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Confidence: {result.confidence}
          </Typography>
          <Button onClick={() => navigate('/')} variant="contained" sx={{ mt: 2 }}>
            Try Again
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ResultPage; 
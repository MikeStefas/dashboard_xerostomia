'use client';

import { Button, Typography, Box } from '@mui/material';
import { BLUE } from '@/constants';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      gap: '1rem'
    }}>
      <Box>
        <Typography variant="h4" fontWeight="bold" sx={{ color: BLUE }}>
          SmileCheck Clinician Dashboard
        </Typography>
        <Typography variant="subtitle1" sx={{ color: BLUE }}>
          Monitor your patients
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#309bf1',
          color: 'black',
          '&:hover': {
            backgroundColor: '#2286c3',
          }
        }}
        onClick={() => router.push('pages/auth/signin')}
      >
        Enter
      </Button>
    </div>
  );
}

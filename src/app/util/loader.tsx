import { Dialog, CircularProgress, Box } from '@mui/material';

export function loader() {
    return (
    <Dialog
  open={true}
  sx = {{ '& .MuiDialog-paper': {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center' }, 
    }}
>
  <Box sx={{p: 4, display: 'flex', justifyContent: 'center',backgroundColor: 'transparent!important'  }} >
    <CircularProgress size = '5rem'/>
  </Box>
</Dialog>
);
}
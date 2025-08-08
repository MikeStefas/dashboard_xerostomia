import {
  Dialog,
  Box,
} from '@mui/material';



type UserData = { id: number, userID: number, yearOfBirth: number, gender: string };

interface UserDialogProps {
  open: boolean;
  onClose: () => void;
  data : UserData
}
export function UserDialog({ open, onClose, data }: UserDialogProps) {


  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <Box sx={{ p: 5 , borderRadius: '20px'}}>
        {typeof data === 'string' ? (
    <p>{data}</p>
  ) : (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.2rem' }}>
      <p>User ID: {data.userID}</p>
      <p>Year of Birth: {data.yearOfBirth}</p>
      <p>Gender: {data.gender}</p>
    </div>
  )}
      </Box>
    </Dialog>
  );
}

export const menuButtonSx = {
  color: 'white',
  borderColor: 'rgba(255, 255, 255, 0.4)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'white',
  },
  justifyContent: 'flex-center',
  paddingLeft: '16px',
};


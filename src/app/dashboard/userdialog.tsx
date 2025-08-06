import {
  Dialog,
  Button,
  Box,
} from '@mui/material';
import { Logout } from '@mui/icons-material';
import { LogoutFunc } from '@/funcs/logout';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserIDContext } from '../layout';
import { ViewUserData } from '@/funcs/viewuserdata';


interface UserDialogProps {
  open: boolean;
  onClose: () => void;
}
type UserData = { id: number, userID: number, yearOfBirth: number, gender: string };
export function UserDialog({ open, onClose }: UserDialogProps) {
  const {currentUserID} = useContext(CurrentUserIDContext);
  const [data, setData] = useState<UserData | string>({id:0, userID: 0, yearOfBirth:0, gender:""});

  useEffect(() => {
    if (currentUserID.current === 0) return;
  
    async function fetchUserData() {
      const result = await ViewUserData(currentUserID.current);
      setData(result);
    }
  
    fetchUserData();
  }, [currentUserID.current]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ '& .MuiDrawer-paper': { minWidth: '250px' } }}
    >
      <Box>
        {typeof data === 'string' ? (
    <p>{data}</p>
  ) : (
    <div>
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

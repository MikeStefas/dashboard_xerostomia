"use client";
import { Button, IconButton} from '@mui/material';
import { createTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Logout } from '@mui/icons-material';
import { LogoutFunc } from '@/funcs/logout';

export function MyAppBar(){
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => alert("Add a patient")}
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add a patient
          </Typography>
          <Button onClick={LogoutFunc}
          color="inherit"
          ><Logout/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export const theme = createTheme({
  
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontSize: 14,
    
  },
  palette: {
    mode: 'dark',
    primary: { main: '#393232' },
    background: { default: '#393232' },
    
  },
});

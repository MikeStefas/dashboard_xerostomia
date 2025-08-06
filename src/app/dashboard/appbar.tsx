"use client";
import { Button, IconButton} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout } from '@mui/icons-material';
import { LogoutFunc } from '@/funcs/logout';
import { MenuDrawer } from './menu';
import { useState } from 'react';


export function MyAppBar(){
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }
  return(
    <Box sx={appBarBoxSx}>
      {/* AppBar with a specific height */}
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Menu Button */}
          <IconButton
            onClick={() => setOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon fontSize='large'/>
          </IconButton>
          
          {/* Menu Dialog Popup*/}
          <MenuDrawer  open={open} onClose={handleClose} />

          {/* Logout Button */}
          <Button 
            onClick={LogoutFunc}
            color="inherit"
          >
            <Logout fontSize='large'/>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export const appBarBoxSx = { 
  flexGrow: 1,  
  minHeight: '40px',
  overflow: 'auto',
  overflowY: 'hidden'
};
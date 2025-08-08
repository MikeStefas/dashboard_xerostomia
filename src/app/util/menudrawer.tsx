import {
  Drawer,
  List,
  ListItem,
  Button,
  Box,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Logout } from '@mui/icons-material';
import { LogoutFunc } from '@/funcs/logout';


interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="left"
      sx={{ '& .MuiDrawer-paper': { minWidth: '250px' } }}
    >
      <Box  >
        <List>
          <ListItem>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={onClose}
              sx={menuButtonSx}
            >
              Add Patient
            </Button>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Logout />}
          onClick={() => {
            LogoutFunc();
            onClose();
          }}
          sx={menuButtonSx}
        >
          Logout
        </Button>
      </Box>
    </Drawer>
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
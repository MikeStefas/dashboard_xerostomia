
import { DARK_GRAY, BLUE_ACCENT, INPUT_BACKGROUND } from '@/constants';

export const AuthSx = {
  signincard: { 
    width: { xs: '100%', sm: '90%', md: '70%', lg: '60%' , xl: '70%' }, 
    minWidth: '300px', 
    maxWidth: '600px', 
    minHeight: '450px', 
    height: { xs: '90%', sm: '90%', md: '70%', lg: '50%', xl: '50%' },
    backgroundColor: DARK_GRAY,
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    flexDirection: 'column',
  },
  signupcard: { 
    width: { xs: '100%', sm: '90%', md: '70%', lg: '60%' }, 
    minWidth: '300px', 
    maxWidth: '600px', 
    minHeight: '600px', 
    height: { xs: '100%', sm: '100%', md: '100%', lg: '70%' },
    backgroundColor: DARK_GRAY,
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    flexDirection: 'column',
  },
  
  textField: {
    marginBottom: { xs: '1rem', sm: '0.5rem', md: '0.5rem', lg: '0.5rem' , xl: '2rem' },
    backgroundColor: INPUT_BACKGROUND,
    width: '80%',
    borderRadius: '4px',
    '& .MuiInputBase-input': {
      fontWeight: 'bold',
    },
  },

  iconButton: {
    color: BLUE_ACCENT,
  },

  loginIcon: {
    fontSize: { xs: '2.5rem', sm: '3.5rem' },
  },
};
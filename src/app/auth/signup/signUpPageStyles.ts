// src/styles/signUpPageStyles.ts

import { BLUE } from '@/constants'; // Import BLUE from your constants file

export const signUpPageSx = {
  card: {
    minWidth: '30%',
    minHeight: '50%',
    backgroundColor: '#393232',
    color: '#EEF1F6',
    p: 2, // Material-UI's spacing unit: 2 * 8px = 16px padding
  },
  textField: {
    backgroundColor: '#7d7979ff',
    borderRadius: '4px',
  },
  iconButton: {
    color: BLUE, // Uses the BLUE constant from '@/constants'
    fontSize: '10', // This likely refers to theme.typography.pxToRem(10) or a spacing unit in MUI's system
    marginTop: '5%',
  },
  loginIcon: {
    fontSize: '2.5rem',
  },
};
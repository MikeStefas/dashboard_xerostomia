'use client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
// import { BLUE } from '@/constants'; // No longer directly needed here as it's used in signUpPageStyles.ts
import { SignUp } from '@/funcs/signupfunc';
import styles from './SignUpPage.module.css'; // Import your CSS Module/ Import your new sx styles file (adjust path as needed)
import { signUpPageSx } from './signUpPageStyles';

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function UpdateEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function UpdatePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function UpdateFirstName(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  }

  function UpdateLastName(event: React.ChangeEvent<HTMLInputElement>) {
    setLastName(event.target.value);
  }

  return (
    <div
      className={styles.container} // Replaced inline style with className
    >
      <Card
        sx={signUpPageSx.card} // Apply card styles from signUpPageSx
      >
        <CardContent>
          <form>
            <div
              className={styles.cardTitle} // Replaced inline style with className
            >
              Sign Up to the SmileCheck Dashboard
            </div>
            <div className={styles.textFieldContainer}> {/* Replaced inline style with className */}
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                sx={signUpPageSx.textField} // Apply text field styles
                onChange={UpdateEmail}
              />
            </div>
            <div className={styles.textFieldContainer}> {/* Replaced inline style with className */}
              <TextField
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                sx={signUpPageSx.textField} // Apply text field styles
                onChange={UpdatePassword}
              />
            </div>
            <div className={styles.textFieldContainer}> {/* Replaced inline style with className */}
              <TextField
                label="First Name"
                type="text" // Changed type to "text" for name fields
                variant="filled"
                fullWidth
                sx={signUpPageSx.textField} // Apply text field styles
                onChange={UpdateFirstName}
              />
            </div>
            <div> {/* This div intentionally has no margin-bottom, similar to original */}
              <TextField
                label="Last Name"
                type="text" // Changed type to "text" for name fields
                variant="filled"
                fullWidth
                sx={signUpPageSx.textField} // Apply text field styles
                onChange={UpdateLastName}
              />
            </div>
            <div
              className={styles.loginButtonContainer} // Replaced inline style with className
            >
              <IconButton
                onClick={async () => {
                  const result = await SignUp(email, password, firstName, lastName);
                  if (result != undefined) {
                    alert(result)
                  }
                }}
                sx={signUpPageSx.iconButton} // Apply icon button styles
              >
                <LoginIcon sx={signUpPageSx.loginIcon} /> {/* Apply login icon styles */}
              </IconButton>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
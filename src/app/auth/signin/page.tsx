'use client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import { SignIn } from '@/funcs/signinfunc';
import styles from './SignInPage.module.css';
import { signInPageSx } from './SignInPageStyles';


export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function UpdateEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function UpdatePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <div
      className={styles.container}
    >
      <Card
        sx={signInPageSx.card} 
      >
        <CardContent>
          <form>
            <div
              className={styles.cardTitle}
            >
              Sign In to the SmileCheck Dashboard
            </div>
            <div className={styles.textFieldContainer}>
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                sx={signInPageSx.textField} 
                onChange={UpdateEmail}
              />
            </div>
            <div>
              <TextField
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                sx={signInPageSx.textField} 
                onChange={UpdatePassword}
              />
            </div>
            <div
              className={styles.loginButtonContainer}
            >
              <IconButton
                onClick={async () => {
                  const result = await SignIn(email, password);
                  if (result != undefined) {
                    alert(result)
                  }
                }}
                sx={signInPageSx.iconButton} 
              >
                <LoginIcon sx={signInPageSx.loginIcon} />
              </IconButton>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
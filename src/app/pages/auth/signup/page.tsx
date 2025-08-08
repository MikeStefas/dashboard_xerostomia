'use client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import { SignUp } from '@/funcs/signupfunc';
import styles from '../auth.style.module.css'; 
import { AuthSx } from '../auth.style';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  function checkPasswordsMatch(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
  }
  
  return (
    <div className={styles.container}>
      <Card sx={AuthSx.signupcard}>
        <CardContent>
          <form className={styles.form}>
            <div className={styles.cardTitle}>
              Sign Up to the SmileCheck Dashboard
            </div>
            <TextField
                label="Email"
                variant="filled"
                fullWidth
                sx={AuthSx.textField} // Apply text field styles
                onChange={(event)=>setEmail(event?.target.value)}
              />
            <TextField
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                sx={AuthSx.textField} // Apply text field styles
                onChange={(event)=>setPassword(event?.target.value)}
              />
            <TextField
                label="confirmPassword"
                type="password"
                variant="filled"
                fullWidth
                sx={AuthSx.textField} // Apply text field styles
                onChange={(event)=>setConfirmPassword(event?.target.value)}
              />  
            <TextField
                label="First Name"
                type="text" // Changed type to "text" for name fields
                variant="filled"
                fullWidth
                sx={AuthSx.textField} // Apply text field styles
                onChange={(event)=>setFirstName(event?.target.value)}
              />
            <TextField
                label="Last Name"
                type="text" // Changed type to "text" for name fields
                variant="filled"
                fullWidth
                sx={AuthSx.textField} // Apply text field styles
                onChange={(event)=>setLastName(event?.target.value)}
              />
            <div
              className={styles.signButtonContainer} // Replaced inline style with className
            >
              <IconButton
                onClick={async () => {
                  if (!checkPasswordsMatch(password, confirmPassword)) {
                    alert("Passwords do not match");
                    return;
                  }
                  const result = await SignUp(email, password, firstName, lastName);
                  if (result != undefined) {
                    alert(result)
                  }else{router.push('/pages/auth/signin')}
                  
                }
              }
                sx={AuthSx.iconButton} // Apply icon button styles
              >
                <LoginIcon sx={AuthSx.loginIcon} /> {/* Apply login icon styles */}
              </IconButton>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
'use client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton, TextField, Button, Dialog,  } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useState, useEffect } from 'react';
import { SignIn } from '@/funcs/signinfunc';
import styles from '../auth.style.module.css';
import { AuthSx} from '../auth.style';
import { redirect } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';
import { loader } from './loader';
import { useRouter } from 'next/navigation';



export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDataLoading, setIsDataLoading] = useState(false);

  //loader variable
  
  async function SignInWrapper(email: string, password: string) {

  setIsDataLoading(true);
    const result = await SignIn(email, password); 
    if (result!=true ) {
      alert(result); 
    } else {
      redirect('/dashboard');
    }
    setIsDataLoading(false);
  }





  return (
    <div className={styles.container}>
      <Card sx={AuthSx.signincard}>
        <CardContent className={styles.cardContent}>
          <form className={styles.form}>
            <div className={styles.cardTitle}>
              Sign In to the SmileCheck Dashboard
            </div>
              <TextField
                label="Email"
                variant="filled"
                sx={AuthSx.textField} 
                onChange={(event)=>setEmail(event?.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                variant="filled"
                sx={AuthSx.textField} 
                onChange={(event)=>setPassword(event?.target.value)}
              />
            <div className={styles.signButtonContainer}>
              <IconButton
                onClick={async () => {
                   SignInWrapper(email, password);
                  }
                }
                sx={AuthSx.iconButton} 
              >
                <LoginIcon sx={AuthSx.loginIcon} />
              </IconButton>
            </div>
            <div style={{ width: '100%',display: 'flex', justifyContent: 'flex-end'}}>
              <Button
                onClick={() => redirect('/auth/signup')}
                size='large'
              >Sign Up</Button></div>
          </form>
          {/*loader*/}
          {isDataLoading ? loader() : <></>} 
        </CardContent>
      </Card>
    </div>
  )
}
'use client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { SignIn } from "./signinfunc";
import { useState } from 'react';


export default function AuthPage() {

  //variables set in page.tsx
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    //function for setEmail
    function UpdateEmail(event: React.ChangeEvent<HTMLInputElement>) {
      setEmail(event.target.value);
    }
  
  
    //function for setPassword
    function UpdatePassword(event: React.ChangeEvent<HTMLInputElement>) {
      setPassword(event.target.value);
    }
  

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card
        sx={{
          minWidth: '30%',
          minHeight: '50%',
          backgroundColor: '#393232',
          color: '#EEF1F6',
          p: 2,
        }}
      >
        <CardContent>
          <form>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#309bf1',
              marginBottom: '1rem',
            }}
          >
            Sign In to the SmileCheck Dashboard
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <TextField
              label="Email"
              variant="filled"
              fullWidth
              sx={{ backgroundColor: '#7d7979ff', borderRadius: '4px' }}
              onChange={UpdateEmail}
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              sx={{ backgroundColor: '#7d7979ff', borderRadius: '4px' }}
              onChange={UpdatePassword}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={async ()=>{
                const result = await SignIn(email,password);
                if(result != undefined){
                  alert(result)
                }}}
              sx={{
                color: '#309bf1',
                fontSize: '10',
                marginTop: '5%',
              }}
            >
              <LoginIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>
          </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
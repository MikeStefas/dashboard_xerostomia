'use client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { IconButton, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import { BLUE } from '@/constants';
import { SignUp } from './signupfunc';



export default function SignUpPage() {

  //variables set in page.tsx
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    //function for setEmail
    function UpdateEmail(event: React.ChangeEvent<HTMLInputElement>) {
      setEmail(event.target.value);
    }
  
  
    //function for setPassword
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
              color: BLUE,
              marginBottom: '1rem',
            }}
          >
            Sign Up to the SmileCheck Dashboard
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
          <div style={{ marginBottom: '1rem' }}>
            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              sx={{ backgroundColor: '#7d7979ff', borderRadius: '4px' }}
              onChange={UpdatePassword}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <TextField
              label="First Name"
              type="firstName"
              variant="filled"
              fullWidth
              sx={{ backgroundColor: '#7d7979ff', borderRadius: '4px' }}
              onChange={UpdateFirstName}
            />
          </div>
          <div>
            <TextField
              label="Last Name"
              type="lastName"
              variant="filled"
              fullWidth
              sx={{ backgroundColor: '#7d7979ff', borderRadius: '4px' }}
              onChange={UpdateLastName}
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
                const result = await SignUp(email,password,firstName,lastName);
                if(result != undefined){
                  alert(result)
                }}}
              sx={{
                color: BLUE,
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
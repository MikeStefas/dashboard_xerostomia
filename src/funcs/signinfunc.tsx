'use server';
import { redirect } from "next/navigation";
import {BACKEND_URL} from "@/constants";
import { cookies } from 'next/headers';
import  { jwtDecode }  from "jwt-decode";
import { SigninFormSchema } from "@/app/auth/credentialtypes";

interface TokenPayload {
  sub: number;
  email: string;
  role: string;
}


export async function SignIn(email: string, password:string) {

  const data = { email : email, password: password };

  //validate the email and password 
  const validationFields = SigninFormSchema.safeParse(data);

  if (!validationFields.success) {
    return 'The password must be 8+ letters.\nThe email should have the schema of an email.'
  }

  //request to signin
  const response = await fetch(`${BACKEND_URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
  
    const result = await response.json();

    //decode the token and check the role
    const decoded = await jwtDecode<TokenPayload>(result["access_token"]);
    if(decoded.role !== "CLINICIAN") {
      return ('You are not a clinician');
    }
    let cookieStore = await cookies();
    //Make cookie for the accesstoken
    cookieStore.set('access_token', result["access_token"], {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 15, // 15 mins
      });

    //make cookie for refreshtoken
    cookieStore.set('refresh_token', result["refresh_token"], {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 7, // 7 hours
      });

    //redirect to dashboard
    redirect('/dashboard');
    } 
  else {
    return("Wrong credentials");
  }
}

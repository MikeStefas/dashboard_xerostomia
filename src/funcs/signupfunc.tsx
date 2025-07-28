'use server';

import { redirect } from "next/navigation";
import {BACKEND_URL} from "@/constants";
import { SignupFormSchema } from "@/app/auth/credentialtypes";




export async function SignUp(email:string, password:string, firstName:string ,lastName:string) {

  const data = { email : email, password: password, firstName: firstName, lastName: lastName };

  //validate the email and password 
  const validationFields = SignupFormSchema.safeParse(data);

  if (!validationFields.success) {
    return 'The password must be 8+ letters.\nThe email should have the schema of an email.\nFirst and Last Name must not be empty.'
  }

  //request to signin
  const response = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    //const result = await response.json();
    redirect('/auth/signin'); // doesnt return anything
  }
  else {
    return("failed");
}}

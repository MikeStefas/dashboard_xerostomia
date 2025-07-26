'use server';
import { cookies } from 'next/headers';
import {BACKEND_URL} from "@/constants";

export async function ViewPatients() {
  const cookieStore = await cookies();

  //fetch data
  const response = await fetch(`${BACKEND_URL}/clinician/view-patients`, {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${cookieStore.get('access_token')?.value}`,
    "Content-Type": "application/json", 
          },
  })

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    throw new Error('Failed to fetch data');
  }
}
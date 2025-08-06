'use server';
import { cookies } from 'next/headers';
import {BACKEND_URL} from "@/constants";

export async function ViewUserData(userID:number) {
  const cookieStore = await cookies();

  //fetch data
  const response = await fetch(`${BACKEND_URL}/clinician/view-user-data`, {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${cookieStore.get('access_token')?.value}`,
    "Content-Type": "application/json", 
          },
  body: JSON.stringify({userID:userID}),
  })


  if (response.ok) {
    const text = await response.text();

    if (!text) {
      return 'User Data not found';
    }

    try {
      const result = JSON.parse(text);
      return result;
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      throw new Error("Invalid JSON in response");
    }
  } else {
    throw new Error("Failed to fetch data");
  }
}
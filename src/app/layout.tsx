'use client';

import "./globals.css";
import React, { useState, createContext, useRef } from "react";


export const CurrentUserIDContext = createContext<{
  currentUserID: { current: number };
}>({
  currentUserID: { current: 0 },
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUserID = useRef(0);
  return (
    <CurrentUserIDContext.Provider value={{currentUserID}}>
      <html lang="en">
        <head>
          <title>EFARMOGH!!!!</title>
        </head>
        <body>{children}</body>
      </html>
    </CurrentUserIDContext.Provider>
  );
}

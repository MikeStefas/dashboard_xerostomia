'use client';

import { Logout } from "@mui/icons-material";
import "./globals.css";
import React, { useState, createContext, useRef, useEffect } from "react";
import { LogoutFunc } from "@/funcs/logout";









// -------------------- Types --------------------
export interface ResultType {
  id: number;
  userID: number;
  email: string;
  createdAt: string;
  tongue: string;
  tonguePercentage: number;
  teeth: string;
  teethPercentage: number;
  saliva: string;
  salivaPercentage: number;
  pain: string;
  painPercentage: number;
}

export interface ResultContextType {
  result: ResultType[];
  setResult: (result: ResultType[]) => void;
}

// -------------------- Result Report Context --------------------
export const resultReportContext = createContext<ResultContextType>({
  result: [],
  setResult: () => {},
});


// -------------------- Root Layout --------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [result, setResult] = useState<ResultType[]>([]);





  return (
    <resultReportContext.Provider value={{ result, setResult }}>

        <html lang="en">
          <head>
            <title>EFARMOGH!!!!</title>
          </head>
          <body>{children}</body>
        </html>
    </resultReportContext.Provider>
  );
}

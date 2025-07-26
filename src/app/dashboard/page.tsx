"use client";
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {DashboardDataGrid,MyAppBar,theme} from './utils';
import { ViewPatients } from './get.patients';
import { useEffect } from 'react';


export function shapeRows(patients: any[]) {
//the rows have to be loaded with the users

patients = patients.map((item,index) => ({
  id: index + 1, 
  userID: item.userID,
  firstName:'TODO',
  lastName: 'TODO',
  email: item.email,
  userData : "button",
  reports: "button",
}));
  return patients;
}


export default function DashboardPage() {
let  [patients,setPatients] = React.useState([]);

useEffect(() => {
    async function fetchData() {
      try {
        const data = await ViewPatients();
        setPatients(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []); 
  return (<>
  
  <ThemeProvider theme={theme}>
  
    <MyAppBar />
    
    {DashboardDataGrid(shapeRows(patients))}
    </ThemeProvider>
    </>
  );
}
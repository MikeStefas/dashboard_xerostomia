"use client";
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { MyAppBar,theme} from './utils';
import { ViewPatients } from './funcs/viewpatients';
import { useEffect } from 'react';
import { DashboardDataGrid, shapeRows } from './datagrid';





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
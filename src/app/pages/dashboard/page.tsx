"use client";
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {MyAppBar} from '../../util/appbar';
import { theme } from '../../util/theme';
import { useEffect } from 'react';
import { DashboardDataGrid, shapeRows } from '../../util/datagrid';
import { ViewPatients } from '@/funcs/viewpatients';
import { useState, createContext, useContext } from 'react';
import { loader } from '../../util/loader';


export const loaderContext = createContext<{ isDataLoading: boolean;
   setIsDataLoading: React.Dispatch<React.SetStateAction<boolean>>}>(
  {
   isDataLoading: false, setIsDataLoading: () => {} }
  );


export default function DashboardPage() {

let  [patients,setPatients] = useState([]);

const [ isDataLoading, setIsDataLoading ] = useState(false);


//on load get the data
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
  {/*Loader for all datagrid components!*/ }
  <loaderContext.Provider value={{ isDataLoading, setIsDataLoading }} >
    {isDataLoading ? loader() : <></>}
  <ThemeProvider theme={theme}>
    <MyAppBar />
    {DashboardDataGrid(shapeRows(patients))}
  </ThemeProvider>
  </loaderContext.Provider>
    </>
  );
}
'use client';
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import { theme } from "../dashboard/theme";
import { AppBar, ThemeProvider } from "@mui/material";
import { dataGridSx, dataGridInitialState } from "../dashboard/datagrid";
import { ViewUserReports } from "../../funcs/viewuserreport";
import styles from './ReportPage.module.css';
import { IconButton, Box } from "@mui/material";
import {Toolbar} from "@mui/material";
import { redirect } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useContext, useState, useEffect, useRef } from "react";
import { CurrentUserIDContext } from "../layout";



//columns
 export const columns: GridColDef[] = [
  { field: 'tongue', headerName: 'Tongue', flex: 0.5},
  { field: 'tonguePercentage', headerName: '%', flex: 0.25},
  { field: 'teeth', headerName: 'Teeth', flex: 0.5},
  { field: 'teethPercentage', headerName: '%', flex: 0.25,},
  { field: 'saliva', headerName: 'Saliva', flex: 0.5 },
  { field: 'salivaPercentage', headerName: '%', flex: 0.25},
  { field: 'pain', headerName: 'Pain', flex: 0.5,},
  { field: 'painPercentage', headerName: '%', flex: 0.25,},

];

//rows
export function shapeRows(reports: any[]) {
//the rows have to be loaded with the users

reports = reports.map((item,index) => ({
  id: index + 1, 
  tongue: item.tongue,
  tonguePercentage: item.tonguePercentage,
  teeth: item.teeth,
  teethPercentage: item.teethPercentage,
  saliva: item.saliva,
  salivaPercentage: item.salivaPercentage,
  pain : item.pain,
  painPercentage: item.painPercentage,
}));
  return reports;
}


export default function ReportPage() {

const {currentUserID} = useContext(CurrentUserIDContext);
const [rows, setRows] = useState<any[]>([]);
const [credentials, setCredentials] = useState<string>('');
const lastFetchedID = useRef<number | null>(null);


useEffect(() => {
    
    if (currentUserID.current === 0) {
      return;
    }

    async function fetchReports() {
      try {
        const result: any = await ViewUserReports(currentUserID.current);
        setRows(shapeRows(result));
        setCredentials(
          'User ID: ' + result[0]['userID'] + ', User Email: ' + result[0]['email']
        );
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    }

    fetchReports();
  }, [currentUserID.current]);

  
//theme and styling of dashboard data grid were used
    return (
            <ThemeProvider theme={theme}>
              {ReportAppBar(credentials)}
              {ReportDataGrid(rows)}
            </ThemeProvider>
            )

}

//the appbar used
export function ReportAppBar(credentials: string){
  return(
              <Box sx= {{ 
              flexGrow: 1,  
              minHeight: '40px',
              overflow: 'auto',
              overflowY: 'hidden'
              }}>
                <AppBar position="static" >
                  <Toolbar sx={{ alignContent: 'center' }}>
                    {/* Appbar go Back Button*/}
                    <IconButton
                    onClick={() => redirect('/dashboard')}
                    size="large"
                    edge="start"
                    color="inherit"
                    sx={{ mr: 2 }}
                    > <ArrowBackIcon/>
                    </IconButton>
                    <h1 className={styles.reportTitle}>{credentials}</h1>
                  </Toolbar>
                </AppBar>
              </Box>)
}

export function ReportDataGrid(rows: any[]) {
  return (
    <Box sx={{
      flexGrow: 1,
      overflow: 'auto',
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      overflowX: 'auto', 
      overflowY: 'hidden',
      }}>
      <DataGrid
        hideFooter
        rows = {rows}
        columns={columns}
        sx={dataGridSx}
        initialState={dataGridInitialState}
        />
    </Box>  
  );
}
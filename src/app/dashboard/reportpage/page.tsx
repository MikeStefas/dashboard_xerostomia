'use client';
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import { theme } from "../utils";
import { AppBar, ThemeProvider } from "@mui/material";
import { dataGridSx, dataGridInitialState, pageSizeOptions } from "../datagrid";
import { ViewUserReports } from "../../../funcs/viewuserreport";
import styles from './ReportPage.module.css';
import { IconButton } from "@mui/material";
import {Toolbar} from "@mui/material";
import { redirect } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
let data = await ViewUserReports();

let rows = shapeRows(data);
let credentials = 'userID: ' + data[0]['userID'] + '\nEmail: ' + data[0]['email'];
export default function ReportPage() {
   
//theme and styling of dashboard data grid were used
    return (
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                  <Toolbar>
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
                <div className='px-30 py-20'>
                    <DataGrid
                    rows = {rows}
                    columns={columns}
                    sx={dataGridSx}
                    initialState={dataGridInitialState}
                    pageSizeOptions={pageSizeOptions}
                />
                </div>  
            </ThemeProvider>
            )

}
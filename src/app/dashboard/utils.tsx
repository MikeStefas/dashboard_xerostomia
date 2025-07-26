"use client";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { GridColDef } from '@mui/x-data-grid/models/colDef';
import { Button, IconButton} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import { createTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Logout } from '@mui/icons-material';
import { LogoutFunc } from './logout';


export function userDataButton(){
    return (<div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,height: "100%"}}>
    <Button size="small" variant='contained' style={{color: "black",backgroundColor: "#d5fddbff"}}> 
      <AccountCircleOutlinedIcon/>
       </Button>
       </div>);
} 

export function reportButton(){
    return ((<div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,height: "100%"}}>
    <Button size="small" variant='contained' style={{color: "black", backgroundColor: "#d5fddbff"}}> 
      <SummarizeOutlinedIcon/>
    </Button>
    </div>));
}

export const theme = createTheme({
  
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontSize: 14,
    
  },
  palette: {
    mode: 'dark',
    primary: { main: '#393232' },
    background: { default: '#393232' },
    
  },
});


const dataGridSx = {
  '& .MuiDataGrid-cell': { fontSize: '1.2rem' },
  '& .MuiDataGrid-columnHeaders': { fontSize: '1.2rem', fontWeight: 'bold' },
  color: 'white',
  borderColor: 'rgba(255,255,255,0.2)',
  
  borderRadius: 2,
  boxShadow: 3,
};

const dataGridInitialState = {
  pagination: { paginationModel: { pageSize: 5 } },
};

const pageSizeOptions = [5, 10, 15, { value: -1, label: "All"}];

export function MyAppBar(){
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => alert("Add a patient")}
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add a patient
          </Typography>
          <Button onClick={LogoutFunc}
          color="inherit"
          ><Logout/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}




export const columns: GridColDef[] = [
  { field: 'userID', headerName: 'User ID', flex: 0.25},
  { field: 'firstName', headerName: 'First Name', flex: 0.5},
  { field: 'lastName', headerName: 'Last Name', flex: 0.5,},
  { field: 'email', headerName: 'Email', flex: 0.75,},
  { field: 'userData', headerName: 'User Data', flex: 0.5 , renderCell: () => (userDataButton()), headerAlign: 'center'},
  { field: 'reports', headerName: 'Reports', flex: 0.5, renderCell: () => (reportButton()), headerAlign: 'center' },

];



export function DashboardDataGrid(rows :any) {
  return (<div className='px-30 py-20'>

      <DataGrid
      rows={rows}
      columns={columns}
      sx={dataGridSx}
      initialState={dataGridInitialState}
      pageSizeOptions={pageSizeOptions}
      />
      
    </div>)}
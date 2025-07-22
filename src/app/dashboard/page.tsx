"use client";
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import users from './users.json';
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import { Button, IconButton} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Logout } from '@mui/icons-material';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontSize: 14,
  },
  palette: {
    primary: { main: '#ade5ffff' },
    background: { default: '#ade5ffff' },
  },
});


const dataGridSx = {
  "& .MuiDataGrid-cell": { fontSize: "1.2rem", padding: '4px 8px'  },
  "& .MuiDataGrid-columnHeaders": { fontSize: "1.3rem" ,padding: '8px'},
  "& .MuiDataGrid-row:nth-of-type(odd)": {backgroundColor: "#cdefff"}, 
  borderRadius: 2,
    boxShadow: 3,
};

const dataGridInitialState = {
  pagination: { paginationModel: { pageSize: 5 } },
};

const pageSizeOptions = [5, 10, 15, { value: -1, label: "All" }];

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


export const columns: GridColDef[] = [
  { field: 'userID', headerName: 'User ID', flex: 0.25,headerAlign: 'center'},
  { field: 'firstName', headerName: 'First Name', flex: 0.5, headerAlign: 'center' },
  { field: 'lastName', headerName: 'Last Name', flex: 0.5, headerAlign: 'center' },
  { field: 'email', headerName: 'Email', flex: 0.75, headerAlign: 'center' },
  { field: 'userData', headerName: 'User Data', flex: 0.5 , renderCell: () => (userDataButton()), headerAlign: 'center'},
  { field: 'reports', headerName: 'Reports', flex: 0.5, renderCell: () => (reportButton()), headerAlign: 'center' },

];

export const rows = users.map((item,index) => ({
  id: index + 1, // MUI DataGrid requires an 'id' field for each row
  userID: item.userID,
  firstName: item.firstName,
  lastName: item.lastName,
  email: item.email,
  userData : "button",
  reports: "button",
    
    
  //createdAt: new Date(item.createdAt).toLocaleDateString(),
  //age: item.age,
  //gender: item.gender,
  //tongue: item.tongue,
  //tonguePercentage: item.tonguePercentage,
  //teeth: item.teeth,
  //teethPercentage: item.teethPercentage,
  //saliva: item.saliva,
  //salivaPercentage: item.salivaPercentage,
  //painSolid: item.painSolid,
  //painLiquid: item.painLiquid,
  //painMixed: item.painMixed,
  //painPercentage: item.painPercentage,
}));



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
          <Button color="inherit"><Logout/></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export function DashboardDataGrid() {
  return (<div className='px-30 py-20'>

      <DataGrid
      rows={rows}
      columns={columns}
      sx={dataGridSx}
      initialState={dataGridInitialState}
      pageSizeOptions={pageSizeOptions}
      />
      
    </div>)}






export default function DashboardPage() {
  return (<>
  <ThemeProvider theme={theme}>
  
    <MyAppBar />
    <DashboardDataGrid />
    
    </ThemeProvider>
    </>
  );
}
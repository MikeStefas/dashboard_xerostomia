
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import { DataGrid } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import { Button } from '@mui/material';
import { redirect } from "next/navigation";
import { resultReportContext } from '../layout';
import Box from '@mui/material/Box';
import { useContext, useState} from 'react';
import {UserDialog } from './userdialog';
import { loaderContext } from '../dashboard/page';
import { ViewUserData } from '@/funcs/viewuserdata';
import { ViewUserReports } from '@/funcs/viewuserreport';
//the grid
export function DashboardDataGrid(rows :any) {
  
  return (
    <Box sx={boxSx}>
      <DataGrid
      rows={rows}
      columns={columns}
      sx={dataGridSx}
      initialState={dataGridInitialState}
      hideFooter
      />
      
    </Box>
      )}

//cols
export const columns: GridColDef[] = [
  { 
    field: 'userID', 
    headerName: 'User ID', 
    flex: 0.25, 
    minWidth: 100 // Ensures this column is at least 100px wide
  },
  { 
    field: 'firstName', 
    headerName: 'First Name', 
    flex: 0.5,
    minWidth: 120 // Ensures this column is at least 120px wide
  },
  { 
    field: 'lastName', 
    headerName: 'Last Name', 
    flex: 0.5,
    minWidth: 120
  },
  { 
    field: 'email', 
    headerName: 'Email', 
    flex: 0.75,
    minWidth: 200 // Ensures the email is readable
  },
  { 
    field: 'userData', 
    headerName: 'User Data', 
    flex: 0.5,
    renderCell: (params) => <UserDataButton userID={params.row.userID} />,
    headerAlign: 'center',
    minWidth: 100 // Buttons need a decent amount of space
  },
  { 
    field: 'reports', 
    headerName: 'Reports', 
    flex: 0.5,
    renderCell: (params) => <ReportButton userID={params.row.userID} />,
    headerAlign: 'center',
    minWidth: 100 // Buttons need a decent amount of space
  },
];

//rows
export function shapeRows(patients: any[]) {
//the rows have to be loaded with the users

patients = patients.map((item,index) => ({
  id: index + 1, 
  userID: item.userID,
  firstName: item.firstName,
  lastName: item.lastName,
  email: item.email,
  userData : item.userID,
  reports: item.userID ,
}));
  return patients;
}



//userdatabutton
export function UserDataButton({ userID }: { userID: number }) {
  const { setIsDataLoading } = useContext(loaderContext);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<any>({});


  const handleClose = () => setOpen(false);

  const handleClick = async () => {
    setIsDataLoading(true);
    setUserData(await ViewUserData(userID));
    setIsDataLoading(false); 
    setOpen(true)
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <Button
        onClick={() => {
          handleClick();
        }}
        size="small"
        variant="contained"
        style={{ color: "black", backgroundColor: "#d5fddbff" }}
      >
        <AccountCircleOutlinedIcon />
      </Button>
      <UserDialog open={open} onClose={handleClose} data={userData} />
    </div>
  );
}



//report button
export function ReportButton({ userID }: { userID: number }) {
  //result set here
  const {setResult} = useContext(resultReportContext);
  const { setIsDataLoading } = useContext(loaderContext);
  

  const handleClick = async () => {
    setIsDataLoading(true);
    setResult(await ViewUserReports(userID));
    redirect("/reportpage");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
      <Button
        onClick={handleClick}
        size="small"
        variant="contained"
        style={{ color: "black", backgroundColor: "#d5fddbff" }}
      >
        <SummarizeOutlinedIcon />
      </Button>
    </div>
  );
}



//styles
export const dataGridSx = {
  Height:'100vh',
  flexGrow: 1, 
  '& .MuiDataGrid-root': {
    fontSize: '1.2rem',
    color: 'white',
    borderColor: 'rgba(255,255,255,0.2)',
  },
  '& .MuiDataGrid-cell': {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  '& .MuiDataGrid-columnHeaders': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
};

export const dataGridInitialState = {
  pagination: { paginationModel: { pageSize: -1 } },
};

export const boxSx = {
  flexGrow: 1,
  overflow: 'auto',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  overflowX: 'auto', 
  overflowY: 'hidden', 
}











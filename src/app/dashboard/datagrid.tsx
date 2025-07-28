import { ViewUserData } from "./funcs/viewuserdata";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import { DataGrid } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import { Button } from '@mui/material';
import { redirect } from "next/navigation";

//the grid
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

//cols
export const columns: GridColDef[] = [
  { field: 'userID', headerName: 'User ID', flex: 0.25},
  { field: 'firstName', headerName: 'First Name', flex: 0.5},
  { field: 'lastName', headerName: 'Last Name', flex: 0.5,},
  { field: 'email', headerName: 'Email', flex: 0.75,},
  { field: 'userData', headerName: 'User Data', flex: 0.5 , renderCell: (params:any) => (userDataButton(params.row.userID)), headerAlign: 'center'},
  { field: 'reports', headerName: 'Reports', flex: 0.5, renderCell: () => (reportButton()), headerAlign: 'center' },

];

//rows
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


//userdatabutton func 
async function ShowUserData(userID :number){ 
  let result = await ViewUserData(userID);
  if(result !== undefined){alert(JSON.stringify(result,null,4))}
  else{alert("No data found")}

}



export function userDataButton(userID:number){
    return (<div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,height: "100%"}}>
    <Button onClick ={() => ShowUserData(userID)}
    size="small" variant='contained' style={{color: "black",backgroundColor: "#d5fddbff"}}> 
      <AccountCircleOutlinedIcon/>
       </Button>
       </div>);
} 



export function ShowReports(){
    redirect("/dashboard/reportpage")
}


export function reportButton(){
    return ((<div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,height: "100%"}}>
    <Button onClick={ShowReports}
    size="small" variant='contained' style={{color: "black", backgroundColor: "#d5fddbff"}}> 
      <SummarizeOutlinedIcon/>
    </Button>
    </div>));
}




//styles
export const dataGridSx = {
  '& .MuiDataGrid-cell': { fontSize: '1.2rem' },
  '& .MuiDataGrid-columnHeaders': { fontSize: '1.2rem', fontWeight: 'bold' },
  color: 'white',
  borderColor: 'rgba(255,255,255,0.2)',
  
  borderRadius: 2,
  boxShadow: 3,
};

export const dataGridInitialState = {
  pagination: { paginationModel: { pageSize: 5 } },
};

export const pageSizeOptions = [5, 10, 15, { value: -1, label: "All"}];












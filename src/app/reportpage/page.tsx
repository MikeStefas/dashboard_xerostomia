'use client';

import { useContext, useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DataGrid } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid/models/colDef';
import { redirect } from 'next/navigation';
import { resultReportContext, ResultType } from '../layout';
import styles from './ReportPage.module.css';
import { dataGridSx, dataGridInitialState } from '../util/datagrid';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../util/theme';
// ---------------- Columns for DataGrid ----------------
const columns: GridColDef[] = [
  { field: 'tongue', headerName: 'Tongue', flex: 0.5 },
  { field: 'tonguePercentage', headerName: '%', flex: 0.25 },
  { field: 'teeth', headerName: 'Teeth', flex: 0.5 },
  { field: 'teethPercentage', headerName: '%', flex: 0.25 },
  { field: 'saliva', headerName: 'Saliva', flex: 0.5 },
  { field: 'salivaPercentage', headerName: '%', flex: 0.25 },
  { field: 'pain', headerName: 'Pain', flex: 0.5 },
  { field: 'painPercentage', headerName: '%', flex: 0.25 },
];

// ---------------- Shape rows function ----------------
function shapeRows(reports: any[]) {
  return reports.map((item, index) => ({
    id: index + 1,
    tongue: item.tongue,
    tonguePercentage: item.tonguePercentage,
    teeth: item.teeth,
    teethPercentage: item.teethPercentage,
    saliva: item.saliva,
    salivaPercentage: item.salivaPercentage,
    pain: item.pain,
    painPercentage: item.painPercentage,
  }));
}

// -------------LOCAL AppBar Component ----------------
function ReportAppBar({ credentials }: { credentials: string }) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ alignContent: 'center' }}>
        <IconButton
          onClick={() => redirect('/dashboard')}
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <h1 className={styles.reportTitle}>{credentials}</h1>
      </Toolbar>
    </AppBar>
  );
}

// ----------------LOCAL DataGrid Component ----------------
function ReportDataGrid({ rows }: { rows: ResultType[] }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: 'auto',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      <DataGrid
        hideFooter
        rows={rows}
        columns={columns}
        sx={dataGridSx}
        initialState={dataGridInitialState}
      />
    </Box>
  );
}

// ---------------- Main Page Component ----------------
export default function ReportPage() {
  //result set in datagrid.tsx
  const { result } = useContext(resultReportContext);
  const [credentials, setCredentials] = useState('');
  const [rows, setRows] = useState<any[]>([]);

//on result change, set the rows of the grid
  useEffect(() => {
    if (result) {
      setCredentials(
        `User ID: ${result[0].userID}, User Email: ${result[0].email}`
      );
      setRows(shapeRows(result));
    }
  }, [result]);

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ReportAppBar credentials={credentials} />
      <ReportDataGrid rows={rows} />
    </Box>
    </ThemeProvider>
  );
}

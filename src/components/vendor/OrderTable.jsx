import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Pick from './Pick';
import { grey } from '@mui/material/colors';

import styled from '@emotion/styled';


export const Epaper = styled(Paper)(({theme})=> ({
  width: '100%', 
  overflow: 'auto',

  [theme.breakpoints.down("md")]: {
   width: '96%',
   margin: '0 0 0 -14px',
  },

  [theme.breakpoints.down("sm")]: {
   width: '84%',
   margin: '0',
  }

}))

const columns = [
  { id: 'order_id', label: 'Order_ID', minWidth: 170 },

  { id: 'product_name', label: 'Product_Name', minWidth: 100 },

  {
    id: 'order_date',
    label: 'Order_Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'order_cost',
    label: 'Order_Cost',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];



function createData(order_id, product_name, order_date, order_cost, status) {
  return { order_id, product_name, order_date, order_cost, status};
}



const rows = [
  createData('24541', 'Men Casual', 'Oct 12, 2022', '$210', 'completed'),
  createData('24541', 'Italian Shoe', 'Nov 15, 2022', '$330',	'Processing'),
  createData('24541', 'Fotlets', 'Dec 2, 2022', '$205',	'Pending'),
  createData('24541', 'Diamon-Ring', 'Dec 11, 2022', '$300', 'Returned'	),
  createData('24541', '24541', 'Dec 12, 2022', '$290', 'Cancelled'	),
];



const presentMonth = (control) => {
  let my_date = new Date();
  let today = my_date.getUTCDate();
  let thisMonth = my_date.getMonth();
  let thisYear = my_date.getFullYear();
  return {Day: today, Month: thisMonth, Year: thisYear, control}
}


export default function OrderTable() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [out, setOut] = useState(0);
  const [period, setPeriod] = useState(0);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };


  useEffect(()=> {
      let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let { Month, Day, Year } = presentMonth(null);

      const periods = () => {
        if(out.control === -30) {
          if(Month === 0){
            Month = 11;
            Day = 31;
            Year -= 1;
          }else{
            Month -= 1;
            Day = 31;
          }
        }
        setPeriod({ Month: months[Month], Day:Day,  Year:Year });
      } 

      const boundary = () => {
        if(out.Day < 0){
          if(Month === 0){
            Month = 11;
            Year -= 1;
            Day = 31 + out.Day;
          } 
          else  Month -=1;
          setOut({Month: months[Month], Day:(Day), Year });
        }
      }

      periods();
      boundary();
  },[setPeriod, out]);

 
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <Epaper>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>

              <TableCell align="left" colSpan={2} sx={{fontSize:'25px', color:grey[500]}}>
                Recent Orders
              </TableCell>

              <TableCell align="center" colSpan={2} sx={{fontSize:'16px', color:grey[600]}}>
                {`${out.Month} ${out.Day}, ${out.Year}`} - {`${period.Month} ${period.Day}, ${period.Year}`}
              </TableCell>

              <TableCell align="right" colSpan={1}>
                <Pick setOut={setOut} out={out} presentMonth={presentMonth}/>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }} >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage} />
    </Epaper>
  );
}

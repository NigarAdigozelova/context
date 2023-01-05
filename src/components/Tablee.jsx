import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Container } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const Tablee = ({ data }) => {


  return (
    <>
    <div style={{fontSize:"30px",textAlign:"center",padding:"50px"}}>Products</div>
      <Container fixed>
      <TableContainer component={Paper} style={{width:"400",margin:"auto"}}>
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Product Id</StyledTableCell>
              <StyledTableCell align="right">Unit Price	</StyledTableCell>
              <StyledTableCell align="right">Units InStock	</StyledTableCell>
              <StyledTableCell align="right">Add To cart</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {data.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.id}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.unitsInStock}</StyledTableCell>
                <StyledTableCell align="right"><Button variant='contained' color='error'>Add</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </>
  )
}

export default Tablee
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useParams, Link } from "react-router-dom"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Billing = () => {
  let { data } = useParams();
  let dataObject = JSON.parse(data);
  let matchInfo = dataObject.matchInfo;
  let totalTicks = dataObject.ticks;
  let extras = dataObject.extras;
  let payable = dataObject.payable + totalTicks * 25000;

  return(
    <div className = "billing-table">
      <div className = "payable"> Your Total Payable is { payable } Rs </div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell> Item </StyledTableCell>
              <StyledTableCell align="right"> Quantity </StyledTableCell>
              <StyledTableCell align="right"> Total Price </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableCell component="th" scope="row"> Tickets </StyledTableCell>
            <StyledTableCell align="right">{ totalTicks }</StyledTableCell>
            <StyledTableCell align="right">{ totalTicks * 25000 }</StyledTableCell>
            {extras.map((row) => (
              <StyledTableRow key={row.key}>
                <StyledTableCell component="th" scope="row">{row.key}</StyledTableCell>
                <StyledTableCell align="right">{ row.value? totalTicks: 0 }</StyledTableCell>
                <StyledTableCell align="right">{ row.value? totalTicks * parseInt(row.price): 0 }</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Link to = {`/generateTick/${ JSON.stringify( {'matchInfo': matchInfo, 'ticks': totalTicks, 'extras': extras, 'payable': payable } ) }`}>
        <button className = "book-button"> Pay & Proceed </button>
        <br /> <br /> <br />
      </Link>
    </div>
  );
}

export default Billing

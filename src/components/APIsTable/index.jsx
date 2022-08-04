import React, {useState} from 'react'

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from '@material-ui/core/styles';

export default function APIsTable(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    console.log(props.data)
    console.log(props.data.entries?.length)
    return (
        <div style={{ display: 'table', tableLayout: 'fixed', height: 400, width: '100%' }}>
            <Paper>
            <TableContainer component={Paper}>
                    <Table aria-label="simple table" stickyHeader className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.sticky}>APIs</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell align="right">Auth</TableCell>
                                <TableCell align="right">CORS</TableCell>
                                <TableCell align="right">Link</TableCell>
                                <TableCell align="right">Category</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.data?.length !==0 && props.data?.entries.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row" className={classes.sticky}>
                                        {row.API}
                                    </TableCell>
                                    <TableCell align="right">{row.Description}</TableCell>
                                    <TableCell align="right">{row.Auth}</TableCell>
                                    <TableCell align="right">{row.Cors}</TableCell>
                                    <TableCell align="right"><a href={row.Link}>{row.Link}</a></TableCell>
                                    <TableCell align="right">{row.Category}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    component="div"
                    count={props.data.entries?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowSize={30}
                ></TablePagination>
            </Paper>
        </div>
        )
}

const useStyles = makeStyles({
    table:{
        width: 400,
        margin: 'auto'
    },
    sticky: {
        position: "sticky",
        left: 0,
        background: 'white',
        boxShadow: "5px 2px 5px grey"
    }
})
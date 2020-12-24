import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: 1000,
        margin: "auto",
        marginTop: 50,
    },
});
const heads = ["Country's Currency Used as Rate", "Rate per kWh At Average Annual Consumption"];
const data=[
    {
        name:"Bangladesh",
        currency:"BDT",
        rate:5.614
    },
    {
        name:"Brazil",
        currency:"BRL",
        rate:0.778
    },
    {
        name:"China",
        currency:"CNY",
        rate:0.545
    },
    {
        name:"Ethiopia",
        currency:"BDT",
        rate:0.349
    },
    {
        name:"Germany",
        currency:"EUR",
        rate:0.319
    },
    {
        name:"India",
        currency:"INR",
        rate:5.94
    },
    {
        name:"Japan",
        currency:"JPY",
        rate:29.959
    },
    {
        name:"Malaysia",
        currency:"MYR",
        rate:0.244
    },
    {
        name:"Pakistan",
        currency:"PK",
        rate:9.406
    },
    {
        name:"Russia",
        currency:"RUB",
        rate:4.445
    },
    {
        name:"Saudia Arabia",
        currency:"SAR",
        rate:0.18
    },
    {
        name:"Turkey",
        currency:"TRY",
        rate:0.71
    },
    {
        name:"UAE",
        currency:"AED",
        rate:0.296
    },
    {
        name:"UK",
        currency:"GBP",
        rate:0.188
    },
    
    {
        name:"USA",
        currency:"US",
        rate:0.149
    },
]
const Electricity = () => {


    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                    <TableCell>Country</TableCell>
                
                        {heads.map((head, ind, arr) => {
                            return <TableCell key={ind} align="right">{head}</TableCell>
                        })}
                    </TableRow>
 

                </TableHead>
                <TableBody>

                    { data.map((record, ind) => {




                        return (<TableRow key={ind}>
                            <TableCell component="th" scope="row">
                                {record.name}
                            </TableCell>
                            <TableCell align="right">{record.currency}</TableCell>
                            <TableCell align="right">{record.rate}</TableCell>

                        </TableRow>)


                    }

                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default Electricity;
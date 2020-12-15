import React, { useState, useEffect } from 'react';
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

const Rates = () => {
    const [rates, setRates] = useState([]);
 
    
    useEffect(() => {
        let rate;
        let data;
        const currencies=["inr","gbp","usd"];
        let constant = "pkr";
            currencies.forEach(async (currency,index,arr)=> {
                rate = `${currency}_${constant}`;
                rate = rate.toUpperCase();
                
                const response = await fetch(`https://free.currconv.com/api/v7/convert?q=${rate}&compact=ultra&apiKey=d4fee7ad69aa51b5555b`);
                data = await response.json();
                setRates(arr=>[...arr, data]);
              
            })
           

            
        
     
       

        
    },[]);

    const classes = useStyles();



    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>

                        <TableCell>Currency</TableCell>
                        <TableCell align="right">Rate Against PKR</TableCell>

                    </TableRow>

                </TableHead>
                <TableBody>

                    {rates && rates.map((record, ind) => {




                        return (<TableRow key={ind}>
                            <TableCell component="th" scope="row">
                                {(Object.keys(record)[0]).substring(0, 3)}
                            </TableCell>
                            <TableCell align="right">{Object.values(record)[0]}</TableCell>


                        </TableRow>)


                    }

                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default Rates;
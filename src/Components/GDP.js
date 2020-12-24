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

const GDP = () => {
    const [gdps, setGDPS] = useState([]);
 
    
    useEffect(() => {
   
        let data;
        let gdp;
        let name;
        let res;
        const countries=["pk","in","gb","us","CN","ae","SA","de","TR","JP","MY","BD",
    "ET","BR","RU"];
       
            countries.forEach(async (country,index,arr)=> {
                country=country.toLowerCase();
                const response = await fetch(`http://api.worldbank.org/v2/country/${country}/indicator/NY.GDP.MKTP.CD?date=2019&format=json`);
                data = await response.json();
                gdp =data[1][0]["value"];
                name=data[1][0]["country"]["value"];
                res={
                    name,gdp
                }
                setGDPS(arr=>[...arr, res]);
              
            })
           

            
        
     
       

        
    },[]);

    const classes = useStyles();



    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>

                        <TableCell>Country</TableCell>
                        <TableCell align="right">GDP as US dollars</TableCell>

                    </TableRow>

                </TableHead>
                <TableBody>

                    {gdps && gdps.map((record, ind) => {




                        return (<TableRow key={ind}>
                            <TableCell component="th" scope="row">
                                {record.name}
                            </TableCell>
                            <TableCell align="right">{record.gdp}</TableCell>


                        </TableRow>)


                    }

                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default GDP;
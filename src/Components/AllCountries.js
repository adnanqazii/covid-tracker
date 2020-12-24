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

export default function DenseTable({ search }) {
  const [countryData, setCountryData] = useState([{}]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.covid19api.com/summary");
      let data = await response.json();
      delete data.Global;
      setCountryData(data.Countries);
   
    }
    getData();

  }, []);
  const classes = useStyles();

  let word;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>

            <TableCell>Country</TableCell>
            <TableCell align="right">Total Deaths</TableCell>
            <TableCell align="right">Total Recovered</TableCell>
            <TableCell align="right">New Confirmed Cases</TableCell>
            <TableCell align="right">New Deaths</TableCell>
            <TableCell align="right">New Recover Cases</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          
          {countryData.map((record, ind) => {
            word=new RegExp(search[0],"i")

            if (search[0]==='Enter Country...'||search[0]===''||((record.Country) &&(record.Country.search(word)!==-1))) {

              return (<TableRow key={ind}>
                <TableCell component="th" scope="row">
                  {record.Country}
                </TableCell>
                <TableCell align="right">{record.TotalDeaths}</TableCell>
                <TableCell align="right">{record.TotalRecovered}</TableCell>
                <TableCell align="right">{record.NewConfirmed}</TableCell>
                <TableCell align="right">{record.NewDeaths}</TableCell>
                <TableCell align="right">{record.NewRecovered}</TableCell>
              </TableRow>)
            }
            else
              return null
          }
            
  )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

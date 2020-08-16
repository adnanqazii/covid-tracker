import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SearchButton({search,searchValue,screenConfig}) {
  const classes = useStyles();
  const handleClick = () => {
    console.log("yes")
    screenConfig[1](1);
    search[1](searchValue[0]);
    searchValue[1]('Enter Country...');
  }
  return (
    <div className={classes.root}>

      <Button onClick={handleClick} variant="contained" color="secondary">
        Search
      </Button>

    </div>
  );
}

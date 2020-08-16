import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        marginTop:500,
    },
});

export default function FootNav({screenConfig}) {
    const classes = useStyles();
  
    const handleChange = (event, newValue) => {
        screenConfig[1](newValue);
    };

    return (
        <BottomNavigation value={screenConfig[0]} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Global Stats" value={0} icon={<RestoreIcon />} />
            <BottomNavigationAction label="Country Stats" value={1} icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Graphs" value={2} icon={<LocationOnIcon />} />

        </BottomNavigation>
    );
}

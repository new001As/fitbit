import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          FitBit
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: '10%',
  },
}));

export default function Footer() {
    
    const classes = useStyles();

    return(       
 <footer className={classes.footer}>
 <Typography variant="h6" align="center" gutterBottom>
   FITBIT
 </Typography>
 <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
   Join the fitness Revolution Now! 
 </Typography>
 <Copyright />
</footer>
    );
}
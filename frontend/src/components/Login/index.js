import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Header from '../Header';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Login(props) {
    const classes = useStyles();

    const handleLoginClick = () => <Link to="/List"></Link>
  
    return (
      <div className={classes.root}>
        <Header>
            <Button color="inherit" onClick={handleLoginClick}>
              Login
              {props.chldren}
            </Button>
        </Header>
      </div>
    );
}



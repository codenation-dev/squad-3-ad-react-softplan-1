import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import Header from '../Header';
import GridView from '../GridView';
import Perfil from '../Perfil';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function List() {
  
  const [elRef, setElRef] = useState(null);

  const classes = useStyles();
  const auth = true;

  const handlePerfil = event => {
    setElRef(elRef ? null : event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <Header>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handlePerfil}
                color="inherit"
              >
              <AccountCircle />
              </IconButton>
            </div>
          )}
          <Perfil elRef={elRef}> </Perfil>
      </Header>
      <GridView />
    </div>
  );
}
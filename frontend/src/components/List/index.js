import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
<<<<<<< HEAD
import { IconButton } from '@material-ui/core';
=======
import { IconButton, MenuItem, Menu } from '@material-ui/core';
>>>>>>> 2513c9d73350281792386357e9aae839a2bb50a5
import { AccountCircle } from '@material-ui/icons';

import Header from '../Header';
import GridView from '../GridView';

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
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
      </Header>
      <GridView />
    </div>
  );
}
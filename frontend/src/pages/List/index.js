import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import Header from '../../components/Header';
import GridView from '../../components/GridView';
import Perfil from '../../components/Perfil';
import { getLogs } from '../../services/api';

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

const getData = () => {
  //[
// ["Joe James", "Test Corp", "Yonkers", "NY"],
// ["John Walsh", "Test Corp", "Hartford", "CT"],
// ["Bob Herm", "Test Corp", "Tampa", "FL"],
// ["James Houston", "Test Corp", "Dallas", "TX"],
//];
  getLogs(`834463a1513858d7b2d2db1ecb99307045712fbd9474dfd78cf78b29db00e90b`);
}

export default function List() {
  
  const [elRef, setElRef] = useState(null);

  const classes = useStyles();
  const auth = true;

  const handlePerfil = event => {
    setElRef(elRef ? null : event.currentTarget);
  };
  
  const columns = ["Name", "Tipo", "Origem", "Story", "Quantidade", "Data Criação"];
  
  const options = {
    filterType: 'checkbox',
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
      <GridView    
        title = {"Central de Erros"}
        data = {getData()}
        columns = {columns}
        options = {options}
      />
    </div>
  );
}
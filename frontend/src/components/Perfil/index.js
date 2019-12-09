import React from 'react';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const handleSair = event => {
    console.log("sair");
  };

const Perfil = ({elRef}) => {
    const classes = useStyles();
    const show = Boolean(elRef);
    const id = show ? 'simple-popper' : undefined;
    return (
        <Popper id={id} open={show} anchorEl={elRef} >
            <div className={classes.paper}>
                perfil do usuário
                <Button size="small" aria-label="Sair"  onClick={handleSair} variant="secundary">Sair</Button> 
            </div>
        </Popper >
    );
  };
  export default Perfil;



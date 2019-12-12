import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
//import './HeaderStyle.css'
import { theme } from './DefaultPageTheme'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    //color: "#d11947",

  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#DFE1DF' }}>
        <Toolbar>
          <Typography color ="primary" align = "center" variant="h4" className={classes.title}>
            AMPlify
          </Typography>
          <Button color = "primary" variant="outlined" className="menuButton"> Login </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

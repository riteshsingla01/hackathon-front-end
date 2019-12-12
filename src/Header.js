import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    //color: "#d11947",

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function ButtonAppBar() {
  const [logout, setLogout] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {logout ? <Redirect to='/' /> : null}
      <AppBar position="static" style={{ background: '#DFE1DF' }}>
        <Toolbar>
          <Avatar  className={classes.avatar}>
            <FilterDramaIcon />
          </Avatar>
          <Typography color ="primary" justify = "center" variant="h4" className={classes.title}>
            CloudReady
          </Typography>
          {window.location.pathname !== '/' ? <Button color = "primary" variant="outlined" className="menuButton" onClick={() => setLogout(true)}> Logout </Button> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

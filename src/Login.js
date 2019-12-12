import React from 'react';
import './App.css';
import { theme } from './DefaultPageTheme'
import Header from './Header'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Icon from '@material-ui/core/Icon';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles(theme => ({

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },


}));


export default function Login() {
const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Container component="main" maxWidth="sm" style={{ marginTop: '8rem' }}>
        <div className = 'page'>
      <Grid container justify='center' style={{ marginBottom: '2rem' }}>
       <Grid item>
         <Avatar  className={classes.avatar}>
          <LockOutlinedIcon />
         </Avatar>
        </Grid>
      </Grid>
          <Grid container justify='center'>
            <Grid container justify='center'>
              <Grid item>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>
                </Grid>
              </Grid>
            </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
      <Grid item>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
      </Grid>
      <Grid container style={{ marginTop: '1rem' }} justify ="center">
        <Grid item>
          <Button variant='contained' style={theme.palette.calmblue}>Sign in</Button>
        </Grid>
      </Grid>
      </div>
      </Container>
      </MuiThemeProvider>
)
}

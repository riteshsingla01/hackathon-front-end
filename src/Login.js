import React, {useState} from 'react';
import { Redirect } from 'react-router-dom'
import './App.css';
import { theme, useStyles } from './DefaultPageTheme'
import Header from './Header'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  function onSignInClick()
  {
    setSignIn(true);
  }

  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      {signIn ? <Redirect to='/search' /> : null}
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
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
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
          <Button id='signInButton' variant='contained' style={theme.palette.calmblue} onClick={onSignInClick}>Sign in</Button>
        </Grid>
      </Grid>
        </div>
      </Container>
    </MuiThemeProvider>
)
}

export default Login;

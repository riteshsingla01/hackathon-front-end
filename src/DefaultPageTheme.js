import { createMuiTheme } from '@material-ui/core/styles'

const stjudered = '#d11947';
const stjudewhite = '#ffffff';
const stjudepurple = '#712d91';
const stjudeblue = '#008ccf';
const stjudedarkgray = '#878a8f';
const stjudelightgray = '#c7c9c8';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: stjudered,
      contrastText: stjudewhite
    },
    secondary: {
      main: stjudewhite,
      contrastText: stjudered
    },
    calmblue: {
      backgroundColor: stjudeblue,
      color: stjudewhite
    },
    poppingpurple: {
      backgroundColor: stjudepurple,
      color: stjudewhite
    },
    gradientgray: {
      background: 'linear-gradient(to top, ' + stjudedarkgray + ', ' + stjudelightgray + ' 10%, ' + stjudewhite + ' 35%)'
    }
  }
});

export { theme };

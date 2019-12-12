import { createMuiTheme } from '@material-ui/core/styles'

const stjudered = '#d11947';
const stjudewhite = '#ffffff';
const stjudepurple = '#712d91';
const stjudeblue = '#008ccf';

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
    }
  }
});
export { theme };

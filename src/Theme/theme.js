import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#291907',
    },
    secondary: {
      main: '#e8dad5',
    },
    error : {
        main: '#f44336'
    }
  },
});

export default theme;
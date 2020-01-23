import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0f0430',
      contrastText: '#D4F370',
    },
    secondary: {
      main: '#D4F370',
      contrastText: '#0f0430',
    },
    background: {
      default: "#0f0430"
    }
  },
});
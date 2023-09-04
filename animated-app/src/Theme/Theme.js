import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24204f',
    },
    secondary: {
      main: '#FF0000',
    },
    info: {
      main: '#a0f2e3',
      light: "#066b8a"
    },
    background: {
      default: "#e4f0e2",
      paper: "linear-gradient(to bottom right, #a0f2e3, #066b8a)"
    },
  },
});

export default theme;
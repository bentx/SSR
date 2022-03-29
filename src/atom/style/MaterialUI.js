import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '90%',
    height: '80%',
    backgroundColor: '#39445a',
    border: '1px solid #282c34',
    borderRadius: 10,
    color: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

export const lightTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fff',
    },
  },
});

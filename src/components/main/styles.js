import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  message: {
    display: 'flex',
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: '100px',
    height: '100px'
  },
}));


export default useStyles;

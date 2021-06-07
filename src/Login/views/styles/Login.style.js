import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paperContainer: {
    flexGrow: 1,
    background: 'lightgray',
    padding: '10%',
    marginTop: '35%'
  },
  sizeAccount: {
      fontSize: '3rem !important'
  },
  textCenter: {
    textAlign: 'center'
  },
  mt10: {
    marginTop: '10% !important'
  },
  br20: {
    borderRadius: '20px !important'
  }
});

export default useStyles;
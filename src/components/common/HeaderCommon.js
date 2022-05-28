import { Button,Box } from "@mui/material"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  titlePage: {
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Roboto',
    width: '92.5%',
    [theme.breakpoints.down('xs')]: {
      width: '59%',
    }
  },
  titlePageHide: {
    color: 'black',
    fontFamily: "Roboto",
    width: '93.4%',
    [theme.breakpoints.down('xs')]: {
      width: '70%',
    }
  },
  header: {
    display: 'flex'
  },
  button: {
    width: '110px',
    height: '40px',
    '&.MuiButton-outlined':{
        color: 'black'
    },
    '&.MuiButton-outlined:hover':{
        backgroundColor: '#e0e0e0'
    },
  },
  buttonBox: {
      paddingTop: '15px',
  },
}))

const HeaderCommon = ({text, onClick, show}) => {
  const classes = useStyles()
  return (
    <Box className={classes.header}>
      <h2 className={show ? classes.titlePage : classes.titlePageHide}>{text}</h2>
      <Box className={classes.buttonBox}>
        <Button 
          className={classes.button} 
          variant="outlined" 
          onClick={onClick}>
            Add New
        </Button>  
      </Box>
    </Box>
  )
}

export default HeaderCommon

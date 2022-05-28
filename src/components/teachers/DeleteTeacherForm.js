import { deleteTeacher } from '../../services/TeachersService'
import { Stack, Button, Box } from '@mui/material'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  titleModal: {
    marginTop: '-50px',
    marginLeft: '-20px',
    width: '285px',
    height: '60px',
    backgroundColor: 'red',
    color: 'white',
    borderBottom: '1px solid black',
    [theme.breakpoints.down('xs')]: {
      width: '285px',
    }
  },
  positionTitle: {
    paddingTop: '10px',
    marginLeft: '-80px',
  },
  deleteMessage: {
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Roboto'
  },
  button: {
    width: '110px',
    height: '40px',
    color: 'black',
    backgroundColor: 'white',
    '&.MuiButton-outlined':{
      backgroundColor: 'white',
      color: 'black'
    },
    '&.MuiButton-outlined:hover':{
      backgroundColor: '#e0e0e0',
    },
    [theme.breakpoints.down('xs')]: {
      width: '110px',
    }
  },
  buttonBox: {
    height: '60px',
    width: '500px',
    marginBottom: '-35px',
    [theme.breakpoints.down('xs')]: {
      width: '293px',
    }
  },
  buttonStack: {
    paddingLeft: '260px',
    paddingTop: '10px',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '90px',
    }
  }
}))

const DeleteNoteForm = ({teacher, setOpen, loadData}) => {
  const classes = useStyles()
  return (
    <Box>
      <h1 className={classes.titleModal}><p className={classes.positionTitle}>Delete teacher</p></h1>
      <p className={classes.deleteMessage}>Delete "{teacher.teacherName} {teacher.teacherSurname}"?</p>
      <Box className={classes.buttonBox}>
        <Stack spacing={3} direction='row'>
          <Button 
            onClick={() => deleteTeacher(teacher.id).then(loadData)} 
            className={classes.button} 
            variant="outlined"
          >
            Yes
          </Button>
          <Button 
            onClick={() => setOpen(false)} 
            className={classes.button} 
            variant="outlined"
          >
            No
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default DeleteNoteForm

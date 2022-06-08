import { Button, Input } from "@mui/material"
import { Box } from "@mui/material"
import Calendar from "./Calendar"
import { Stack } from "@mui/material"
import { addCourse, editCourse } from "../../services/CoursesService"
import { useState } from "react"
import { format } from "date-fns"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  titleModal: {
    marginTop: '-30px',
    width: '500px',
    height: '60px',
    backgroundColor: '#1976d2',
    color: 'white',
    borderBottom: '1px solid black',
    [theme.breakpoints.down('xs')]: {
      width: '293px',
    }
  },
  positionTitle: {
    paddingTop: '10px',
    paddingLeft: '10px'
  },
  courseName: {
    marginBottom: '30px'
  },
  textInput: {
    width: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '293px',
    }
  },
  calendarInput: {
    marginBottom: '30px'
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
      backgroundColor: '#e0e0e0'
    },
    '&.MuiButton-outlined:disabled':{
      color: '#bdbdbd'
    },
    [theme.breakpoints.down('xs')]: {
      width: '90px',
    }
  },
  buttonBox: {
    height: '60px',
    width: '500px',
    border: '1px solid black',
    backgroundColor: '#1976d2',
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

const ManageCourseForm = ({ loadData, editForm, handleCloseModal }) => {
  const classes = useStyles()
  const [courseName, setCourseName] = useState(editForm.courseName)
  const [startDate, setStartDate] = useState(editForm.startDate)
  const [endDate, setEndDate] = useState(editForm.endDate)
  const handleChangeStartDate = (newValue) => {
    setStartDate(format(newValue, 'yyyy-MM-dd'));
  };
  const handleChangeEndDate = (newValue) => {
    setEndDate(format(newValue, 'yyyy-MM-dd'));
  };
  const onSubmit = (e) => {
      e.preventDefault()
      setCourseName('')
      if(editForm.id){
        editCourse({courseName, startDate, endDate, id: editForm.id}).then(loadData)
      } else {
        addCourse({courseName, startDate, endDate}).then(loadData)
      }
  } 
  return (
    <Box>
      <h1 className={classes.titleModal}><p className={classes.positionTitle}>{editForm.id ? 'Edit Course' : 'Add New Course'}</p></h1>
      <form onSubmit={onSubmit}>
        <Box className={classes.courseName}>
          <Input 
            placeholder={editForm.id ? "Edit course name" : "Add course name"} 
            onChange = {(e) => setCourseName(e.target.value)}
            defaultValue = {editForm.courseName}
            required
            className={classes.textInput}
          /> 
        </Box>
        <Box className={classes.calendarInput}>
          <Calendar
            startDate = {startDate}
            endDate = {endDate}
            handleChangeStartDate = {handleChangeStartDate}
            handleChangeEndDate = {handleChangeEndDate}
            editForm = {editForm}
          />
        </Box>
        <Box className={classes.buttonBox}>
          <Stack className={classes.buttonStack} spacing={2} direction="row">
            <Button className={classes.button} variant="outlined" type="submit" disabled = {!courseName}>{editForm.id ? "Edit" : "Add"}</Button>
            <Button className={classes.button} variant="outlined" onClick={handleCloseModal}>Cancel</Button>
          </Stack>
        </Box>
      </form>
    </Box>
  )
}

export default ManageCourseForm

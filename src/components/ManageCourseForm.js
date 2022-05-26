import { Button, Input } from "@mui/material"
import { Box } from "@mui/material"
import Calendar from "./Calendar"
import { Stack } from "@mui/material"
import { addCourse, editCourse } from "../Services"
import { useState } from "react"
import { format } from "date-fns"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  titleModal: {
    marginTop: '-5px',
    borderBottom: '1px solid black'
  },
  courseName: {
    marginBottom: '30px'
  },
  textInput: {
    width: '235px'
  },
  calendarInput: {
    marginBottom: '30px'
  },
  button: {
    width: '110px',
    height: '40px',
    color: 'black',
  },
  buttonName: {
    color: 'black',
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
      <h1 className={classes.titleModal}>{editForm.id ? 'Edit Course' : 'Add New Course'}</h1>
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
            <Stack spacing={2} direction="row">
                <Button className={classes.button} variant="outlined" type="submit" disabled = {!courseName}><p className={classes.buttonName}>{editForm.id ? "Edit" : "Add"}</p></Button>
                <Button className={classes.button} variant="outlined" onClick={handleCloseModal}><p className={classes.buttonName}>Exit</p></Button>
            </Stack>
      </form>
    </Box>
  )
}

export default ManageCourseForm

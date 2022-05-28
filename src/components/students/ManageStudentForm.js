import { Button, Input } from "@mui/material"
import { Box } from "@mui/material"
import { Stack } from "@mui/material"
import { addStudent, editStudent } from "../../services/StudentsService"
import { useState } from "react"
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
  studentData: {
    marginBottom: '30px'
  },
  textInput: {
    width: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '293px',
    }
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

const ManageTeacherForm = ({ loadData, editForm, handleCloseModal }) => {
  const classes = useStyles()
  const [studentName, setStudentName] = useState(editForm.studentName)
  const [studentSurname, setStudentSurname] = useState(editForm.studentSurname)
  const onSubmit = (e) => {
      e.preventDefault()
      setStudentName('')
      setStudentSurname('')
      if(editForm.id){
        editStudent({studentName, studentSurname, id: editForm.id}).then(loadData)
      } else {
        addStudent({studentName, studentSurname}).then(loadData)
      }
  } 
  return (
    <Box>
      <h1 className={classes.titleModal}><p className={classes.positionTitle}>{editForm.id ? 'Edit Student' : 'Add New Student'}</p></h1>
      <form onSubmit={onSubmit}>
        <Box className={classes.studentData}>
          <Input 
            placeholder={editForm.id ? "Edit student name" : "Add student name"} 
            onChange = {(e) => setStudentName(e.target.value)}
            defaultValue = {editForm.studentName}
            required
            className={classes.textInput}
          /> 
        </Box>
        <Box className={classes.studentData}>
          <Input 
            placeholder={editForm.id ? "Edit student surname" : "Add student surname"} 
            onChange = {(e) => setStudentSurname(e.target.value)}
            defaultValue = {editForm.studentSurname}
            required
            className={classes.textInput}
          /> 
        </Box>
        <Box className={classes.buttonBox}>
          <Stack className={classes.buttonStack} spacing={2} direction="row">
            <Button className={classes.button} variant="outlined" type="submit" disabled = {!studentName || !studentSurname}>{editForm.id ? "Edit" : "Add"}</Button>
            <Button className={classes.button} variant="outlined" onClick={handleCloseModal}>Cancel</Button>
          </Stack>
        </Box>
      </form>
    </Box>
  )
}

export default ManageTeacherForm

import { Button, Input } from "@mui/material"
import { Box } from "@mui/material"
import { Stack } from "@mui/material"
import { addStudent, editStudent } from "../Services"
import { useState } from "react"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  titleModal: {
    marginTop: '-5px',
    borderBottom: '1px solid black'
  },
  studentData: {
    marginBottom: '30px'
  },
  textInput: {
    width: '245px'
  },
  button: {
    width: '115px',
    height: '40px',
    color: 'black',
  },
  buttonName: {
    color: 'black',
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
      <h1 className={classes.titleModal}>{editForm.id ? 'Edit student' : 'Add New Student'}</h1>
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
        <Box className="button-modal">
            <Stack spacing={2} direction="row">
                <Button className={classes.button} variant="outlined" type="submit" disabled = {!studentName || !studentSurname}><p className={classes.buttonName}>{editForm.id ? "Edit" : "Add"}</p></Button>
                <Button className={classes.button} variant="outlined" onClick={handleCloseModal}><p className={classes.buttonName}>Exit</p></Button>
            </Stack>
        </Box>
      </form>
    </Box>
  )
}

export default ManageTeacherForm

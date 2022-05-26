import { Button, Input } from "@mui/material"
import { Box } from "@mui/material"
import { Stack } from "@mui/material"
import { addTeacher, editTeacher } from "../Services"
import { useState } from "react"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  titleModal: {
    marginTop: '-5px',
    borderBottom: '1px solid black'
  },
  teacherData: {
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
  const [teacherName, setTeacherName] = useState(editForm.teacherName)
  const [teacherSurname, setTeacherSurname] = useState(editForm.teacherSurname)
  const onSubmit = (e) => {
      e.preventDefault()
      setTeacherName('')
      setTeacherSurname('')
      if(editForm.id){
        editTeacher({teacherName, teacherSurname, id: editForm.id}).then(loadData)
      } else {
        addTeacher({teacherName, teacherSurname}).then(loadData)
      }
  } 
  return (
    <Box>
      <h1 className={classes.titleModal}>{editForm.id ? 'Edit teacher' : 'Add New Teacher'}</h1>
      <form onSubmit={onSubmit}>
        <Box className={classes.teacherData}>
            <Input 
                placeholder={editForm.id ? "Edit teacher name" : "Add teacher name"} 
                onChange = {(e) => setTeacherName(e.target.value)}
                defaultValue = {editForm.teacherName}
                required
                className={classes.textInput}
            /> 
        </Box>
        <Box className={classes.teacherData}>
            <Input 
                placeholder={editForm.id ? "Edit teacher surname" : "Add teacher surname"} 
                onChange = {(e) => setTeacherSurname(e.target.value)}
                defaultValue = {editForm.teacherSurname}
                required
                className={classes.textInput}
            /> 
        </Box>
            <Stack spacing={2} direction="row">
                <Button className={classes.button} variant="outlined" type="submit" disabled = {!teacherName || !teacherSurname}><p className={classes.buttonName}>{editForm.id ? "Edit" : "Add"}</p></Button>
                <Button className={classes.button} variant="outlined" onClick={handleCloseModal}><p className={classes.buttonName}>Exit</p></Button>
            </Stack>
      </form>
    </Box>
  )
}

export default ManageTeacherForm

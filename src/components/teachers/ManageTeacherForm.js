import { Button, Input } from "@mui/material"
import { Box } from "@mui/material"
import { Stack } from "@mui/material"
import { addTeacher, editTeacher } from "../../services/TeachersService"
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
  teacherData: {
    marginBottom: '30px'
  },
  textInput: {
    width: '500px'
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
      <h1 className={classes.titleModal}><p className={classes.positionTitle}>{editForm.id ? 'Edit Teacher' : 'Add New Teacher'}</p></h1>
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
        <Box className={classes.buttonBox}>
          <Stack className={classes.buttonStack} spacing={2} direction="row">
            <Button className={classes.button} variant="outlined" type="submit" disabled = {!teacherName || !teacherSurname}>{editForm.id ? "Edit" : "Add"}</Button>
            <Button className={classes.button} variant="outlined" onClick={handleCloseModal}>Cancel</Button>
          </Stack>
        </Box>
      </form>
    </Box>
  )
}

export default ManageTeacherForm

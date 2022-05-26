import StudentsModal from './StudentsModal'
import { Box } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { useState, useEffect } from 'react'
import TableStudents from './TableStudents'
import { getStudents } from '../Services'

const useStyles = makeStyles((theme) => ({
  table: {
    [theme.breakpoints.down('xl')]: {
      paddingLeft: '200px',
      paddingTop: theme.spacing(7),
      minWidth: '260px',
      paddingBottom: '80px'
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '200px',
      paddingTop: theme.spacing(7),
      width: '1460px',
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '200px',
      paddingTop: theme.spacing(7),
      width: '1200px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '200px',
      paddingTop: theme.spacing(7),
      width: '900px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '110px',
      paddingTop: theme.spacing(6),
      minWidth: '260px'
    }
  },
  titlePage: {
    textShadow: '0 0 3px blue',
    color: 'white',
    width: '94%',
    [theme.breakpoints.down('xs')]: {
      width: '69%',
    }
  },
  header: {
    display: 'flex'
  },
  modal: {
    paddingTop: theme.spacing(2.2),
  }
}))

const Students = () => {
  const [open, setOpen] = useState(false)
  const [students, setStudents] = useState([])
  useEffect(() => {
    loadStudents()
  }, [])
  const loadStudents = () => getStudents().then((student) => setStudents(student))
  const [editForm, setEditForm] = useState({});
  const handleCloseModal = () => {
    setOpen(false)
  }
  const loadData = () => {
    handleCloseModal()
    loadStudents()
  }
  const openEditModal = (student) => {
    setEditForm(student)
    setOpen(true)
  }
  const classes = useStyles()
  return (
    <Box className={classes.table}>
      <Box className={classes.header}>
        <h2 className={classes.titlePage}>Students</h2>
        <Box className={classes.modal}>
          <StudentsModal 
            open = {open}
            setOpen = {setOpen}
            loadData = {loadData} 
            editForm = {editForm}
            handleCloseModal = {handleCloseModal}  
            setEditForm = {setEditForm} 
          />  
        </Box>
      </Box>
      <TableStudents 
        students = {students}
        loadData = {loadData} 
        openEditModal = {openEditModal}
      />
    </Box>
  )
}

export default Students

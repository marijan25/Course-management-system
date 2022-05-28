import StudentsModal from '../students/StudentsModal'
import { Box } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { useState, useEffect } from 'react'
import TableStudents from '../students/TableStudents'
import { getStudents } from '../../services/StudentsService'

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
      width: '1450px',
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
  tableHide: {
    [theme.breakpoints.down('xl')]: {
      paddingLeft: '10px',
      paddingTop: theme.spacing(7),
      minWidth: '260px',
      paddingBottom: '80px'
    },
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '10px',
      paddingTop: theme.spacing(7),
      width: '1640px',
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '10px',
      paddingTop: theme.spacing(7),
      width: '1230px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '10px',
      paddingTop: theme.spacing(7),
      width: '900px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '2px',
      paddingTop: theme.spacing(6),
      minWidth: '260px'
    }
  },
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
    width: '93.4%',
    [theme.breakpoints.down('xs')]: {
      width: '70%',
    }
  },
  header: {
    display: 'flex'
  },
  modal: {
    paddingTop: theme.spacing(2.2),
    width: '100px'
  }
}))

const Students = ({show}) => {
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
    <Box className={show ? classes.table : classes.tableHide}>
      <Box className={classes.header}>
        <h2 className={show ? classes.titlePage : classes.titlePageHide}>Students</h2>
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

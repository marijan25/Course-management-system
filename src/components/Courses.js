import CoursesModal from './CoursesModal'
import { Box } from '@mui/material'
import TableCourse from './TableCourse'
import { makeStyles } from '@material-ui/core'

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

const Courses = ({open, setOpen, courses, loadData, editForm, openEditModal, handleCloseModal, setEditForm}) => {
  const classes = useStyles()
  return (
    <Box className={classes.table}>
      <Box className={classes.header}>
        <h2 className={classes.titlePage}>Courses</h2>
        <Box className={classes.modal}>
          <CoursesModal 
            open = {open}
            setOpen = {setOpen} 
            loadData = {loadData} 
            editForm = {editForm}
            handleCloseModal = {handleCloseModal}  
            setEditForm = {setEditForm}
          />  
        </Box>
      </Box>
      <TableCourse 
        courses = {courses} 
        loadData = {loadData} 
        openEditModal = {openEditModal}
      />
    </Box>
  )
}

export default Courses

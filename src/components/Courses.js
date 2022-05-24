import Modal from './Modal'
import { Box } from '@mui/material'
import TableCourse from './TableCourse'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    table: {
        paddingLeft: '15px',
    },
}))

const Courses = ({open, setOpen, courses, loadData, editForm, openEditModal, handleCloseModal, setEditForm}) => {
  const classes = useStyles()
  return (
        <Box className={classes.table}>
          <Box className='header-course'>
            <h2>Courses</h2>
            <Box className='modal'>
              <Modal 
                open = {open}
                setOpen = {setOpen} 
                loadData = {loadData} 
                editForm = {editForm}
                handleCloseModal = {handleCloseModal}  
                setEditForm = {setEditForm}
              />  
            </Box>
            <TableCourse 
              courses = {courses} 
              loadData = {loadData} 
              openEditModal = {openEditModal}
            />
          </Box>
        </Box>
  )
}

export default Courses

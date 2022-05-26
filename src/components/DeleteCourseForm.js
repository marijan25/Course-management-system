import { deleteCourse } from '../Services'
import { Stack, Button, Box } from '@mui/material'

const DeleteCourseForm = ({course, setOpen, loadData}) => {
  return (
    <Box>
      <p>Delete "{course.courseName}"?</p>
      <Stack spacing={3} direction='row'>
        <Button 
          onClick={() => deleteCourse(course.id).then(loadData)} 
          variant='contained' 
          color='error' 
        >
          Yes
        </Button>
        <Button 
          onClick={() => setOpen(false)} 
          variant='contained' 
          color='success' 
        >
            No
        </Button>
      </Stack>
    </Box>
  )
}

export default DeleteCourseForm

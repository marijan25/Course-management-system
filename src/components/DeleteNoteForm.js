import { deleteCourse } from '../CourseService'
import { Stack, Button, Box } from '@mui/material'

const DeleteNoteForm = ({course, setOpen, loadData}) => {
  return (
    <Box>
      <p>Delete "{course.courseName}"?</p>
      <Stack spacing={3} direction='row'>
            <Button 
              onClick={() => {
                deleteCourse(course.id).then(loadData)
              }} 
              variant='contained' 
              color='error' 
              sx={{color:'white'}}
            >
              Yes
            </Button>
            <Button 
              onClick={() => setOpen(false)} 
              variant='contained' 
              color='success' 
              sx={{backgroundColor:'green', color:'white'}}>
                No
            </Button>
          </Stack>
    </Box>
  )
}

export default DeleteNoteForm

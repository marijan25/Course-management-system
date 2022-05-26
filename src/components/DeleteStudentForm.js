import { deleteStudent } from '../Services'
import { Stack, Button, Box } from '@mui/material'

const DeleteNoteForm = ({student, setOpen, loadData}) => {
  return (
    <Box>
      <p>Delete "{student.studentName}"?</p>
      <Stack spacing={3} direction='row'>
        <Button 
          onClick={() => deleteStudent(student.id).then(loadData)} 
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

export default DeleteNoteForm

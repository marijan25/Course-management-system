import { deleteTeacher } from '../Services'
import { Stack, Button, Box } from '@mui/material'

const DeleteNoteForm = ({teacher, setOpen, loadData}) => {
  return (
    <Box>
      <p>Delete "{teacher.teacherName}"?</p>
      <Stack spacing={3} direction='row'>
        <Button 
          onClick={() => deleteTeacher(teacher.id).then(loadData)} 
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

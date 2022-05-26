import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';
import ManageCourseForm from './ManageCourseForm';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({open, setOpen, courses, loadData, editForm, handleCloseModal, setEditForm}) {
  return (
    <Box>
      <Button  
        onClick={() => {
          setOpen(true)
          setEditForm({})}
        }
      >
        Add New
      </Button>
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <ManageCourseForm 
            setOpen = {setOpen} 
            courses = {courses} 
            loadData = {loadData} 
            editForm = {editForm}
            handleCloseModal = {handleCloseModal}  
          />
        </DialogContent>
      </BootstrapDialog>
    </Box>
  );
}

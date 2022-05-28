import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';
import ManageStudentForm from '../students/ManageStudentForm';
import HeaderCommon from '../common/HeaderCommon';

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
    <Box className='modal'>
      <HeaderCommon  
        onClick={() => {
          setOpen(true)
          setEditForm({})}
        }
        text = "Students"
      />
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <ManageStudentForm 
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

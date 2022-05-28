import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';
import ManageTeacherForm from '../teachers/ManageTeacherForm';
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
    <Box>
      <HeaderCommon  
        onClick={() => {
          setOpen(true)
          setEditForm({})}
        }
        text = "Teachers"
      />
      <BootstrapDialog
        onClose={() => setOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <ManageTeacherForm 
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

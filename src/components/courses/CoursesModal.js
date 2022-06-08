import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';
import ManageCourseForm from '../courses/ManageCourseForm';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  button: {
    width: '110px',
    height: '40px',
    color: 'black',
  },
  buttonName: {
    color: 'black',
  }
}))

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({open, setOpen, courses, loadData, editForm, handleCloseModal, setEditForm}) {
  const classes = useStyles()
  return (
    <Box>
      <Button  
        onClick={() => {
          setOpen(true)
          setEditForm({})}
        }
        variant="outlined"
        className={classes.button}
      >
        <p className={classes.buttonName}>Add New</p>
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

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import DeleteTeacherModal from './DeleteTeacherModal'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  icons: {
    display: 'inline-flex'
  },
  deleteIcon: {
    marginRight: '-25px'
  },
  editIcon: {
    marginRight: '-10px'
  }
}))

export default function BasicTable({teachers, loadData, openEditModal}) {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Teacher name</TableCell>
            <TableCell align="right">Teacher surname</TableCell>
            <TableCell align='right'>Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow
              key={teacher.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {teacher.id}
              </TableCell>
              <TableCell align="right">{teacher.teacherName}</TableCell>
              <TableCell align="right">{teacher.teacherSurname}</TableCell>
              <TableCell align="right">
                <Box className={classes.icons}>
                  <Box className={classes.editIcon}>
                    <Button onClick={() => openEditModal(teacher)}> <EditIcon /> </Button>
                  </Box>
                  <Box className={classes.deleteIcon}>
                    <DeleteTeacherModal teacher = {teacher} loadData = {loadData}/>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

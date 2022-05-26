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
import DeleteStudentModal from './DeleteStudentModal'
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

export default function BasicTable({students, loadData, openEditModal}) {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Student name</TableCell>
            <TableCell align="right">Student surname</TableCell>
            <TableCell align='right'>Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell align="right">{student.studentName}</TableCell>
              <TableCell align="right">{student.studentSurname}</TableCell>
              <TableCell align="right">
                <Box className={classes.icons}>
                  <Box className={classes.editIcon}>
                    <Button onClick={() => openEditModal(student)}> <EditIcon /> </Button>
                  </Box>
                  <Box className={classes.deleteIcon}>
                    <DeleteStudentModal student = {student} loadData = {loadData}/>
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

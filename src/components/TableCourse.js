import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DeleteModal from './DeleteModal'
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
    minWidth: '1480px'
  }
}))

export default function BasicTable({courses, loadData, openEditModal}) {
  const classes = useStyle()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Course name</TableCell>
            <TableCell align="right">Start date</TableCell>
            <TableCell align="right">End date</TableCell>
            <TableCell align="right">Edit/Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow
              key={course.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {course.id}
              </TableCell>
              <TableCell align="right">{course.courseName}</TableCell>
              <TableCell align="right">{course.startDate}</TableCell>
              <TableCell align="right">{course.endDate}</TableCell>
              <TableCell align="right">
                <Box className='edit-delete-cell'>
                  <Button onClick={() => openEditModal(course)}> <EditIcon /> </Button>
                  <DeleteModal course = {course} loadData = {loadData}/>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

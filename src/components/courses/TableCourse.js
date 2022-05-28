import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DeleteCourseModal from './DeleteCourseModal'
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  tableCell: {
    width: '200px'
  },
  tableCellId: {
    width: '125px'
  },
  tableCellStartDate: {
    width: '175px'
  },
  icons: {
    display: 'inline-flex'
  },
  deleteIcon: {
    marginRight: '-24px'
  },
  editIcon: {
    marginRight: '-10px'
  },
}))

export default function BasicTable({courses, loadData, openEditModal}) {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCellId}>Id</TableCell>
            <TableCell className={classes.tableCell}>Course name</TableCell>
            <TableCell className={classes.tableCellStartDate}>Start date</TableCell>
            <TableCell className={classes.tableCell}>End date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow
              key={course.id}
              sx={{'&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell>{course.id}</TableCell>
              <TableCell>{course.courseName}</TableCell>
              <TableCell>{course.startDate}</TableCell>
              <TableCell>{course.endDate}</TableCell>
              <TableCell align="right">
                <Box className={classes.icons}>
                  <Box className={classes.editIcon}>
                    <Button onClick={() => openEditModal(course)}> <EditIcon /> </Button>
                  </Box>
                  <Box className={classes.deleteIcon}>
                    <DeleteCourseModal course = {course} loadData = {loadData}/>
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

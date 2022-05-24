import { Grid, Paper, Box } from "@mui/material"
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  paper: {
    width: '280px',
    height: '80px',
    paddingLeft: '10px',
    paddingTop: '10px'
  },
  box: {
    paddingBottom: '5px'
  }
}))

const CoursesList = ({courses}) => {
  const classes = useStyle()
  return (
    <Grid container spacing={14}>
      {courses.map((course) => (
        <Grid item sm={4} md={3} key={course.id}>
          <Paper elevation={10} className={classes.paper}>
            <Box className={classes.box}>
              <h3>Course name:</h3>
              <Box className="value">{course.courseName}</Box>
            </Box>
            <Box className={classes.box}>
              <h3>Start date:</h3>
              <Box className="value">{course.startDate}</Box>
            </Box>
            <Box className={classes.box}>
              <h3>End date:</h3>
              <Box className="value">{course.endDate}</Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default CoursesList

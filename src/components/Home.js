import { Grid, Paper, Box } from "@mui/material"
import { makeStyles } from '@material-ui/core'
import { getCourses } from "../services/CoursesService"
import { useState, useEffect } from "react"

const useStyle = makeStyles((theme) => ({
  paper: {
    '&.MuiPaper-root': {
      backgroundColor: '#1976d2',
    },
    width: '260px',
    height: '80px',
    paddingLeft: '10px',
    paddingTop: '10px',
    border: '5px solid #1976d2',
    [theme.breakpoints.down('xs')]: {
      width: '230px',
    },
    [theme.breakpoints.down('lg')]: {
      width: '220px',
    },
  },
  box: {
    paddingBottom: '5px',
  },
  container: {
    height: '500px',
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(37),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(15),
      paddingTop: theme.spacing(9),
      height: '800px'
    },
    [theme.breakpoints.down('sm')]: {
      gap: '50px'
    },
    '&.MuiGrid-root': {
      [theme.breakpoints.down('xs')]: {
        marginBottom: '60px',
        gap: '10px'
      },
    },
  },
  containerHide: {
    height: '500px',
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(20),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(15),
      paddingTop: theme.spacing(9),
      height: '800px'
    },
    [theme.breakpoints.down('sm')]: {
      gap: '50px'
    },
    '&.MuiGrid-root': {
      [theme.breakpoints.down('xs')]: {
        paddingLeft: '70px',
        marginBottom: '60px',
        gap: '10px'
      },
    },
  },  
  courseName: {
    textShadow: '0 0 3px blue',
    color: 'white',
    textAlign: 'center',
    borderBottom: '2px solid white',
    fontWeight: 'bold',
    width: '210px',
  },
  title: {
    fontSize: '24px',
    marginTop: '-10px',
    marginBottom: '5px'
  },
  labelDate: {
    textShadow: '0 0 3px blue',
    color: 'white',
    display: 'inline'
  },
  value: {
    display: 'inline',
    textShadow: '0 0 3px black',
    color: 'white'
  }
}))

const Home = ({show}) => {
  const classes = useStyle()
  const [courses, setCourses] = useState([])
  useEffect(() => {
    loadCourses()
  }, [])
  const loadCourses = () => getCourses().then((course) => setCourses(course))
  return (
    <Grid container className={show ? classes.container : classes.containerHide}>
      {courses.map((course) => (
        <Grid item xs={12} sm = {6} lg={3} md={4} key={course.id}>
          <Paper elevation={10} className={classes.paper}>
            <Box className={classes.box}>
              <Box className={classes.courseName}><h2 className={classes.title}>{course.courseName}</h2></Box>
            </Box>
            <Box className={classes.box}>
              <h3 className={classes.labelDate}>Start date:</h3>
              <Box className={classes.value}>{course.startDate}</Box>
            </Box>
            <Box className={classes.box}>
              <h3 className={classes.labelDate}>End date:</h3>
              <Box className={classes.value}>{course.endDate}</Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default Home

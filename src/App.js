import TopBar from "./components/TopBar";
import Courses from "./components/Courses";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getCourses } from "./Services";
import { makeStyles } from '@material-ui/core'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import { List, ListItem, ListItemText } from "@material-ui/core";
import CoursesList from './components/CoursesList'
import Teachers from "./components/Teachers";
import Students from "./components/Students"
import Footer from "./components/Footer";

const useStyle = makeStyles((theme) => ({
  drawer: {
    display: 'flex'
  },
  list: {
    paddingTop: theme.spacing(8),
    position: 'fixed',
    height: '100vh',
    borderRight: '1px solid #efebe9',
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(7),
    },
  },
  button: {
    border: '0.5px solid #efebe9',
    cursor: 'pointer',
    width: '180px',
    [theme.breakpoints.down('xs')]: {
      width: '100px'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
}))

function App() {
  const classes = useStyle()
  const [courses, setCourses] = useState([])
  const [editForm, setEditForm] = useState({});
  useEffect(() => {
    loadCourses()
  }, [])
  const loadCourses = () => getCourses().then((course) => setCourses(course))
  const handleCloseModal = () => {
    setOpen(false)
  }
  const [open, setOpen] = useState(false);
  const loadData = () => {
    handleCloseModal()
    loadCourses()
  }
  const openEditModal = (course) => {
    setEditForm(course)
    setOpen(true)
  }
  return (
    <Box>
      <TopBar />
      <BrowserRouter>
        <Box className={classes.drawer}>
            <List className={classes.list}>
              <Link to="/" className={classes.link}>
                <ListItem button className={classes.button}>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
              <Link to="/courses" className={classes.link}>
                <ListItem button className={classes.button}>
                  <ListItemText primary={"Courses"} />
                </ListItem>
              </Link>
              <Link to="/teacher" className={classes.link}>
                <ListItem button className={classes.button}>
                  <ListItemText primary={"Teachers"} />
                </ListItem>
              </Link>
              <Link to="/student" className={classes.link}>
                <ListItem button className={classes.button}>
                  <ListItemText primary={"Students"} />
                </ListItem>
              </Link>
            </List>
          <Routes>
            <Route exact path="/" element=
              {
                <CoursesList courses = {courses}/>
              }/>
            <Route exact path="/courses" element=
              {
                <Courses 
                  open = {open} 
                  setOpen = {setOpen} 
                  courses = {courses} 
                  loadData = {loadData}
                  editForm = {editForm}
                  openEditModal = {openEditModal} 
                  handleCloseModal = {handleCloseModal}
                  setEditForm = {setEditForm}
                />
              }/>
            <Route exact path="/teacher" element={<Teachers />}/>
            <Route exact path="/student" element={<Students />}/>
          </Routes>
        </Box>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}

export default App;

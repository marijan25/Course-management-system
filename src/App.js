import TopBar from "./components/TopBar";
import Courses from "./components/Courses";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getCourses } from "./CourseService";
import { makeStyles } from '@material-ui/core'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CoursesList from './components/CoursesList'

const useStyle = makeStyles((theme) => ({
  drawerPaper: {
    width: 'inherit', 
    zIndex: '-1'
  },
  drawer: {
    paddingTop: theme.spacing(10),
  },
  list: {
    paddingTop: theme.spacing(8),
  },
  button: {
    border: '0.5px solid #efebe9',
    cursor: 'pointer'
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
        <Box style={{display: 'flex'}} className={classes.drawer}>
          <Drawer
            style={{width: '150px'}}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{paper: classes.drawerPaper}}
          >
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
                  <ListItemText primary={"Teacher"} />
                </ListItem>
              </Link>
              <Link to="/student" className={classes.link}>
                <ListItem button className={classes.button}>
                  <ListItemText primary={"Student"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
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
            <Route exact path="/teacher" element={"Teacher"}/>
            <Route exact path="/student" element={"Student"}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;

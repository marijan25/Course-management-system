import Courses from "./courses/Courses";
import { Box } from "@mui/material";
import { makeStyles } from '@material-ui/core'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import { List, ListItem, ListItemText } from "@material-ui/core";
import Home from "./Home";
import Teachers from "./teachers/Teachers";
import Students from "./students/Students";

const useStyles = makeStyles((theme) => ({
    drawer: {
      display: 'flex',
    },
    hide: {
        display: 'none',
        '&.drawer':{
            paddingLeft: '10px'
        },
    },
    'hide:open': {
        paddingLeft: '100px'
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

const SideBar = ({show}) => {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <Box className={classes.drawer}>
          <List className={ show ? classes.list : classes.hide}>
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
          <Route exact path="/" element={<Home show = {show}/>}/>
          <Route exact path="/courses" element={<Courses show = {show}/>}/>
          <Route exact path="/teacher" element={<Teachers show = {show}/>}/>
          <Route exact path="/student" element={<Students show = {show}/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default SideBar

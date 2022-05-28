import BottomNavigation from '@mui/material/BottomNavigation';
import { Paper, Box } from "@mui/material";
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.footer} elevation={3}>
            <BottomNavigation>
                <Box>
                    <p>Footer</p>
                </Box>
            </BottomNavigation > 
        </Paper>
    )
}

export default Footer

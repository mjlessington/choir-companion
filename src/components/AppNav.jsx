import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Login from './Login'
import Logout from './Logout';

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    },
    menuButton: {
    marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    }));

    export default function ButtonAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose} href= 'https://drive.google.com/drive/folders/1oD3sKUIJ_p_2V1PKR8S3zc2-kQhX0Rqd?usp=sharing' >Choir Docs</MenuItem>
                    <MenuItem onClick={handleClose} href='https://www.musixmatch.com/'>Find Lyrics </MenuItem>
                    <MenuItem onClick={handleClose}>Schedule</MenuItem>
                </Menu>
               

            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Choir Companion    
            </Typography>
            <Login />
            <Logout />
            </Toolbar>
        </AppBar>
        </div>
    );
    }

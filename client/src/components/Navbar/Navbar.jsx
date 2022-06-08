import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, IconButton, Link, Typography, Menu, MenuItem } from '@material-ui/core';
import './style.scss';
import ProfileIcon from '@material-ui/icons/AccountCircle';


function Navbar() {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    let name;
    if (window.location.pathname === '/signin') {
        name = "SIGNUP";
    }
    else if (window.location.pathname === '/' || window.location.pathname === '/signup') {
        name = "SIGNIN";
    }
    else {
        if (localStorage.getItem("token")) {
            name = "LOGOUT"
        }
        else {
            name = "SIGNIN"
        }

    }

    if (localStorage.getItem("token") && window.location.pathname === '/') {
        name = "LOGOUT";
    }

    const handleOpenClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = () => {
        if (name === "SIGNIN") {
            history.push('/signin');
        }
        if (name === "SIGNUP") {
            history.push('/signup');
        }
        if (name === "LOGOUT") {
            localStorage.clear();
            history.push('/');
        }
    }

    return <Box className="nav">
        <Box className='product-name'>
            <Link className='pjt-name' style={{ color: "white", textDecoration: "none", marginLeft: "10px" }} href={localStorage.getItem("token") ? "/categories" : "/"} variant='h4'>
                Relax
            </Link>
        </Box>
        {
            localStorage.getItem("token") ?
                <Box className='categories' >
                    <Link style={{ textDecoration: "none" }} className='link' href='/music'>
                        <Typography variant='h6'>
                            Music
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: "none" }} className='link' href='/books'>
                        <Typography variant='h6'>
                            Books
                        </Typography>
                    </Link>
                    <Link style={{ textDecoration: "none" }} className='link' href='/yoga'>
                        <Typography variant='h6'>
                            Yoga
                        </Typography>
                    </Link>
                </Box> : null
        }

        <Box>
            {
                localStorage.getItem("token") ? <><IconButton
                    className='icon'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleOpenClick}
                >
                    <ProfileIcon style={{ color: "white" }} />
                </IconButton>
                    <Menu
                        style={{ marginTop: "50px" }}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => { history.push(`/music`) }}>Music</MenuItem>
                        <MenuItem onClick={() => { history.push(`/books`) }}>Books</MenuItem>
                        <MenuItem onClick={() => { history.push(`/yoga`) }}>Yoga</MenuItem>


                    </Menu></> : null
            }

            <Button disableElevation size="small" onClick={handleClick} className='signup-btn'>
                {name}
            </Button>

        </Box>
    </Box>
}

export default Navbar;
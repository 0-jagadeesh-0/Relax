import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './style.scss'
import AudiotrackRoundedIcon from '@material-ui/icons/AudiotrackRounded';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SelfImprovementIcon from '@material-ui/icons/AccessibilityNew';

function Home() {

    return <Box className='main-home'>
        <Navbar />
        <Box className='home'>
            <Box className='categories'>
                <Link to="/music" style={{ textDecoration: "none" }} >
                    <Paper className='category' elevation={3}>
                        <Typography variant='h6'>
                            MUSIC
                        </Typography>
                        <AudiotrackRoundedIcon style={{ fontSize: "3rem", margin: "2% 0" }} />
                    </Paper>
                </Link>
                <Link to="/books" style={{ textDecoration: "none" }}>
                    <Paper className='category' elevation={3}>
                        <Typography variant='h6'>
                            BOOKS
                        </Typography>
                        <LibraryBooksIcon style={{ fontSize: "3rem", margin: "2% 0" }} />
                    </Paper>
                </Link>
                <Link to="/yoga" style={{ textDecoration: "none" }}>
                    <Paper className='category' elevation={3}>
                        <Typography variant='h6'>
                            YOGA
                        </Typography>
                        <SelfImprovementIcon style={{ fontSize: "3rem", margin: "2% 0" }} />
                    </Paper>
                </Link>
            </Box>
        </Box>
    </Box>;
}

export default Home;

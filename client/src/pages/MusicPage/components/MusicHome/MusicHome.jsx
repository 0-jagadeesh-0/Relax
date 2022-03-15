import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Box, Paper } from '@material-ui/core';
import './style.scss'

function MusicHome() {

    const [music, setMusic] = useState([]);

    useEffect(() => {
        axios.get("https://relaxtst.herokuapp.com/music").then((res) => {
            setMusic(res.data.music);
        })
    }, [music])

    return <Box>
        <Navbar />
        <Box className='music-menu'>
            {
                music.map((val) => {
                    return <Paper elevation={4} key={val.id} className='music-item'>
                        <Link style={{ textDecoration: "none", color: "black" }} to={`/song/${val.id}`}>
                            <Box className='music'>
                                <img style={{ width: "200px", height: "200px" }} src={val.image} alt='' />
                                <p>{val.title}</p>
                            </Box>
                        </Link>
                    </Paper>
                })
            }
        </Box>
    </Box>;

}

export default MusicHome
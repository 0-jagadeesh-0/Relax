import { Box, Button, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './style.scss';

function Playlist() {
    const history = useHistory();

    const [playlist, setplaylist] = useState([]);

    const [update, setupdate] = useState(false);

    useEffect(() => {
        axios.get(`https://relax-from-stress.herokuapp.com/api/playlist/${localStorage.getItem("userId")}`).then((res) => {
            setplaylist(res.data);
        })

    }, [update])

    const handleClick = (id) => {
        history.push(`/song/${id}`);
    }
    const handleRemove = async (id) => {
        axios.delete(`https://relax-from-stress.herokuapp.com/api/playlist/${id}`).then((res) => {
            console.log(res.data);
            setupdate(!update);

        })
        await axios.get(`https://relax-from-stress.herokuapp.com/api/playlist/${localStorage.getItem("userId")}`).then((res) => {
            setplaylist(res.data);
        })
    }
    return (
        <div>
            <Navbar />
            <Box className='playlist-container'>
                {
                    playlist.length !== 0 ? playlist.map((ele, index) => {
                        return <Paper elevation={4} className='playlist-item' key={index} >

                            <img className='playlist-image' src={ele.image} alt='' />
                            <Typography onClick={() => { handleClick(ele.musicId) }} className='playlist-title'>
                                {ele.title}
                            </Typography>

                            <Button onClick={() => { handleRemove(ele._id) }} disableElevation size='small' style={{ color: "white", fontWeight: "bold", margin: "0 10px", backgroundColor: "red" }} >
                                Remove
                            </Button>



                        </Paper>
                    }) : <Box>Add Your favourite Songs.</Box>
                }
            </Box>

        </div>
    )
}

export default Playlist
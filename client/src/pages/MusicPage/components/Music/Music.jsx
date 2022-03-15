import React, { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { Box, IconButton, Paper, Typography } from '@material-ui/core';
import Navbar from '../../../../components/Navbar/Navbar';
import './style.scss'
import { useHistory } from 'react-router-dom';
import PlayListAdd from '@material-ui/icons/PlaylistAdd'
import PlayListAddCheck from '@material-ui/icons/PlaylistAddCheck'


function Music() {

    const history = useHistory();

    const [play, setplay] = useState(true);
    const [item, setitem] = useState({ id: '', song: '', title: '', image: '' });
    const [totalSongs, settotalSongs] = useState(0);
    const [foundItem, setfoundItem] = useState(false);
    const [musicId, setmusicId] = useState('');

    const id = Number(window.location.pathname.split('/')[2]);


    let nextSong = (id === totalSongs) ? "1" : String(id + 1);

    let preSong = (id === 1) ? String(totalSongs) : String(id - 1);




    useLayoutEffect(() => {
        const setMusic = async () => {
            await axios.get("https://relaxtst.herokuapp.com/music").then((res) => {
                const data = res.data.music;
                settotalSongs(data.length);
                data.forEach(ele => {
                    if (ele.id === id) {
                        setitem(ele);
                    }
                });
            })

        }

        setMusic();


    }, [id])

    useEffect(() => {
        const findItem = async (id) => {
            console.log(id);
            await axios.get(`http://localhost:5000/api/playlist/find/${localStorage.getItem("userId")}`,{music:id}).then((res) => {
                setfoundItem(res.data);
                console.log(foundItem);
            })
        }
        findItem(item.id);
    }, [])







    const handleClick = (id) => {
        var audio = document.getElementById(id);
        if (play === true) {
            audio.play();

            setplay(false);

        }
        else {
            audio.pause();
            setplay(true);
        }

    }



    const handlePost = async (id, title, song, image) => {

        await axios.post(`http://localhost:5000/api/playlist/add/${localStorage.getItem("userId")}`, { music: id, title: title, song: song, image: image }).then((res) => {
            console.log(res);
        })
    }

    return <Box>
        <Navbar />
        <Box className='music-container'>
            <Paper className='music-card' elevation={4}>
                <audio id={item.title} src={item.song}></audio>
                <img style={{ width: "200px", height: "200px", borderRadius: "100%" }} src={item.image} alt='' />
                <Box style={{ margin: "10% 0" }} >
                    <IconButton onClick={() => { history.push(`/song/${preSong}`) }}>
                        <FontAwesomeIcon color='white' icon={faBackward} />
                    </IconButton>
                    <IconButton onClick={() => handleClick(item.title)} >
                        <FontAwesomeIcon color='white' icon={play ? faPlay : faPause} />
                    </IconButton>
                    <IconButton onClick={() => { history.push(`/song/${nextSong}`) }}>
                        <FontAwesomeIcon color='white' icon={faForward} />
                    </IconButton>

                </Box>


                <Typography variant='h6' style={{ fontWeight: "bold", color: "white" }} >
                    {item.title}
                </Typography>
                <IconButton onClick={() => { handlePost(item.id, item.title, item.song, item.image) }} >
                    {
                        foundItem ? <PlayListAddCheck style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }} /> :
                            <PlayListAdd style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }} />
                    }

                </IconButton>
            </Paper>
        </Box>



    </Box>;
}

export default Music;

import { Box, Paper } from '@material-ui/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './style.scss';

function Yoga() {
    const [yoga, setYoga] = useState([]);

    useEffect(() => {

        axios.get("https://relaxtst.herokuapp.com/yoga").then((res) => {
            setYoga(res.data.yoga);
        })

    }, [yoga])




    return <div>
        <Navbar />
        <Box className='yoga-container' >
            {
                yoga.map((val) => {
                    return <Paper elevation={4} className='yoga-card' key={val.id}>
                        <img style={{ width: "200px", height: "200px" }} src={val.link} alt='' />
                        <p>{val.title}</p>
                    </Paper>
                })
            }
        </Box>

    </div>;
}

export default Yoga;

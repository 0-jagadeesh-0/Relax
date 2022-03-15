import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import image from '../../images/relax.png';
import './style.scss';

function LandingPage() {
    const history = useHistory();
    return <Box>
        <Navbar />
        <Box className='landing-page-container'>
            <Box className='landing-page'>
                <Box className='main-info'>
                    <Typography className='info' align='center' variant="h4">
                        Do you feel Stress.
                    </Typography>
                    <Typography className='info' align='center' variant="h4">
                        Do you want relief.
                    </Typography>
                    {localStorage.getItem("token") ? null : <><Typography className='info' align='center' variant="h4">
                        Here is the solution SignUp and Relax.
                    </Typography>
                        <Box className='btn-box'>
                            <Button variant='contained' style={{ backgroundColor: "#022E57", color: "white" }} size="large" disableElevation onClick={() => { history.push("/signup") }}>
                                SIGNUP
                            </Button>
                        </Box></>}
                </Box>
                <Box className='image'>
                    <img className='relax-image' src={image} alt="relax" />
                </Box>
            </Box>
        </Box>
    </Box>
}

export default LandingPage;

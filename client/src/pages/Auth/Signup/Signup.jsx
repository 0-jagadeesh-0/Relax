import { Avatar, Box, Button, TextField } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import './style.scss';

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    const handleSubmit = async () => {
        if (firstName === "" || lastName === "" || email === "" || username === "" || password === "") {
            alert("Please fill the details.")
        }
        else {
            const res = await axios.post("http://localhost:5000/api/register", { firstName, lastName, username, email, password }).then((res) => {
                // console.log(res);
                history.push('/signin');
            })

        }

    }



    return <>{localStorage.getItem("token") ? <Redirect to="/" /> : <Box className='signup-page'>
        <Navbar />
        <Box className='main'>
            <Avatar style={{ margin: "20px 0" }} className='lock-icon'>
                <LockOutlined />
            </Avatar>
            <Box className='signup-form'>

                <TextField
                    style={{ margin: "5px" }}
                    variant="outlined"
                    label="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <TextField
                    style={{ margin: "5px" }}
                    variant="outlined"
                    label="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />

                <TextField
                    style={{ margin: "5px", width: "fitContent" }}
                    variant='outlined'
                    label='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <TextField
                    type='email'
                    style={{ margin: "5px" }}
                    variant='outlined'
                    label='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                <TextField
                    type='password'
                    style={{ margin: "5px" }}
                    variant='outlined'
                    label='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                <Button className='signup-btn' style={{ margin: "5px" }} onClick={handleSubmit} >SIGN UP</Button>
            </Box>
        </Box>
    </Box>}</>
}

export default Signup;

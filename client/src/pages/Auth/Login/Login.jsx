import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Avatar, Box, Button, TextField } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Navbar from '../../../components/Navbar/Navbar';
import './style.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');

    const handleSubmit = async () => {
        try {
            await axios.post("https://relax-from-stress.herokuapp.com/api/login", { username, password }).then((res) => {
                if (res.status === 203) {
                    setError(true);
                    seterrorMessage(res.data);

                }

                if (res.status === 200) {
                    // console.log(res.data);
                    const token = res.data.token;
                    const userId = res.data.userId;
                    const firstName = res.data.firstName;
                    localStorage.setItem("token", token);
                    localStorage.setItem("userId", userId);
                    localStorage.setItem("firstName", firstName);
                    history.push('/categories');
                }

            })

        } catch (error) {
            console.log(error);
            setError(true);
        }


    }


    return <>{localStorage.getItem("token") ? <Redirect to="/" /> : <Box className='login-page'>
        <Navbar />
        <Box className='main'>
            {error && <alert style={{ color: "red" }} >{errorMessage}</alert>}
            <Avatar style={{ margin: "20px 0" }} className='lock-icon'>
                <LockOutlined />
            </Avatar>
            <Box className='login-form'>
                <TextField
                    style={{ margin: "5px" }}
                    className="inp"
                    variant='outlined'
                    label='Username'
                    onChange={(e) => setUsername(e.target.value)} />
                <TextField
                    type='password'
                    style={{ margin: "5px" }}
                    className="inp"
                    variant='outlined'
                    label='Password'
                    onChange={(e) => setPassword(e.target.value)} />
                <Button className='login-btn' style={{ margin: "5px" }} onClick={handleSubmit} >LOGIN</Button>
            </Box>
        </Box>

    </Box>}</>
}

export default Login;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';
import { Box, Paper } from '@material-ui/core';
import Navbar from '../../components/Navbar/Navbar';

function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get("https://relaxtst.herokuapp.com/book").then((res) => {
            setBooks(res.data.books);
        })
    }, [books])



    return <Box>
        <Navbar />
        <Box className='books-container'>
            {
                books.map((val) => {
                    return <Paper elevation={4} className='books' key={val.id}>
                        <Box className='book'>
                            <a href={val.book}><img className='book-image' src={val.image} alt='' /></a>
                            <p className='title' style={{ textAlign: "center" }} >{val.title}</p>
                        </Box>
                    </Paper>
                })
            }
        </Box>
    </Box>;
}

export default Books;

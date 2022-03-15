const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const playlistRoutes = require('./routes/playlistRoutes');

dotenv.config();

// Database Connection 

connectDB();

// Server 

const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("Api is Running");
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '30mb', extended: 'true' }));

// middlewares

app.use('/api', userRoutes);
app.use('/api/playlist/', playlistRoutes);
app.use(notFound);
app.use(errorHandler);



// Listen 

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server is running");
});
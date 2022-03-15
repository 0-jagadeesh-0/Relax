const User = require('../models/user');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcrypt')


const createUser = async (req, res) => {
    try {
        const newUser = await new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        await newUser.save();
        res.status(200).send("Success");
    }
    catch (error) {
        res.status(400).send({ message: "User Already Exist", error });
    }
}

const getUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (username === "" || password === "") return res.status(203).json("invalid credentials.")
        const user = await User.findOne({ username });
        if (user && (bcrypt.compareSync(password, user.password))) {
            // Generate an accessToken
            let accessToken = generateToken(user._id);
            res.status(200).json({
                username: user.username,
                email: user.email,
                token: accessToken,
                userId: user._id
            });
        }
        else {
            res.status(204);
        }
    }
    catch (error) {
        return res.status(404).json(error);
        // throw new Error(error.message);
        // console.log(error);
    }
}




module.exports = { getUser, createUser };
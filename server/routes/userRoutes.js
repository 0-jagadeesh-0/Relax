const express = require('express');
const { createUser, getUser } = require('../controllers/auth');
const { verifyToken } = require('../validate/verifyToken');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', getUser);

module.exports = router;

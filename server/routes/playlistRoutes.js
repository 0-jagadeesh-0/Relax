const express = require('express');
const { createPlaylist, findInPlaylist, getPlaylist, removeSong } = require('../controllers/playlist');
const router = express.Router();

router.post("/add/:id", createPlaylist);

router.post("/find/:id", findInPlaylist);

router.get("/:id", getPlaylist);

router.delete('/:id', removeSong);

module.exports = router;
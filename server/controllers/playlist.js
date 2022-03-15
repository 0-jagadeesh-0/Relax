const Playlist = require("../models/playlist");

const createPlaylist = async (req, res) => {
    const { id } = req.params;
    try {

        const item = await Playlist.findOne({ musicId: req.body.music });
        if (item) {
            res.status(200).json("Already item Exists.");
        }

        else {
            const newItem = await Playlist({
                userId: id,
                musicId: req.body.music,
                title: req.body.title,
                song: req.body.song,
                image: req.body.image
            });
            await newItem.save();
            res.status(200).json(newItem);
        }


    } catch (error) {
        res.status(400).json({
            message: "Something went wrong!"
        })
    }
}

const getPlaylist = async (req, res) => {
    const { id } = req.params;

    try {
        const playlist = await Playlist.find({ userId: id });
        res.status(200).json(playlist);
    } catch (error) {
        res.status(400).json(error);

    }
}

const removeSong = async (req, res) => {
    const { id } = req.params;
    try {
        await Playlist.findByIdAndRemove({ _id: id });
    } catch (error) {
        res.status(400).json(error);
    }
}

const findInPlaylist = async (req, res) => {
    const { id } = req.params;
    try {
        const playlist = await Playlist.find({ userId: id });
        playlist.forEach(ele => {
            if (ele.musicId === req.body.music) {
                res.status(202).json(true);
            }
        })

        res.status(202).json(false);


    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = { createPlaylist, getPlaylist, removeSong, findInPlaylist };
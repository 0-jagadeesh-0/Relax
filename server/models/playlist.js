const mongoose = require('mongoose');

const playListSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    musicId: {
        type: Number
    },
    title: {
        type: String
    },
    song: {
        type: String
    },
    image: {
        type: String
    },
    inList: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Playlist = mongoose.model("Playlist", playListSchema);

module.exports = Playlist;
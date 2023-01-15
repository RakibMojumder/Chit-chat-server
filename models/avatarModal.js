const mongoose = require('mongoose');

const avatarSchema = {
    img: String
};

module.exports = new mongoose.model('avatar', avatarSchema);
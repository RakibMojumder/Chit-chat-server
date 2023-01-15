const mongoose = require('mongoose');

const registerSchema = {
    userName: String,
    email: String,
    password: String,
    avatar: String
};


module.exports = new mongoose.model('users', registerSchema)
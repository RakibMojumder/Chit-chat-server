
require('dotenv').config();

const dev = {
    db: {
        url: process.env.DB_URL || 'mongodb://localhost:27017/chitChat'
    }
};

module.exports = dev;
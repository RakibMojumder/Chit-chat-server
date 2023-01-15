const mongoose = require('mongoose');
const config = require('./config');
const dbURL = config.db.url;

mongoose.set('strictQuery', false);
mongoose.connect(dbURL).then(() => console.log("Database connected successful")).catch(e => console.log(e.message));
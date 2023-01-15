const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');
const avatarRoutes = require('./routes/avatarRoutes');

// connecting the mongoDB
require('./config/db');


// middle wares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// user routes
app.use('/auth', userRoutes);
// avatar routes
app.use('/avatar', avatarRoutes);

// home route
app.get('/', (req, res) => {
    res.send("API is running");
});

// route error handling
app.use((req, res, next) => {
    res.status(404).json('route not found')
});

// server error handling
app.use((err, req, res, next) => {
    res.status(500).json('Something is broken')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
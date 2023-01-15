const express = require('express');
const getAvatar = require('../Controllers/avatarControllers');
const router = express.Router();

router.get('/', getAvatar);

module.exports = router;
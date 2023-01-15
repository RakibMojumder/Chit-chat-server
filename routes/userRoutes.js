const express = require('express');
const { userRegister, getAllUser, logIn } = require('../Controllers/userControllers');
const router = express.Router();

router.get('/register', getAllUser);
router.post('/login', logIn);
router.post('/register', userRegister);

module.exports = router;
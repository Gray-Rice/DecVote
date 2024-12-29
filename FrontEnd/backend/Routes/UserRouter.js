const express = require('express');
const { SignUpValidation, LoginValidation } = require('../Middlewares/AuthValidation');
const { signup, login } = require('../Controllers/AuthController');
const router = express.Router();


router.post('/login', LoginValidation, login);
router.post('/signup', SignUpValidation, signup);


module.exports = router;
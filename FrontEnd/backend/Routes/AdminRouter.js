const express = require('express');
const router = express.Router();
const authenticateToken = require('../Middlewares/AdminMiddleware'); 

const { login } = require('../Controllers/AdminController'); // Destructure to get the login function

router.post('/login', login);
router.get('/:Hospital',authenticateToken,(req,res)=>{
    res.status(400).json({Message:"Found"})
})

module.exports = router;
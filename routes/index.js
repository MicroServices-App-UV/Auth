const express = require('express')
const router = express.Router()

// @ desc Login/Landing page 
// @route GET /
router.get('/', (req, res)=>{
    res.send('Login')
})

// @ desc Register
// @route GET /register
router.get('/register', (req, res)=>{
    res.send('Register')
})

module.exports = router
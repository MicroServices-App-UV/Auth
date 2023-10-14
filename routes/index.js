const express = require('express')
const router = express.Router()

// @ desc Login/Landing page 
// @route GET /
router.get('/', (req, res)=>{
    res.render('login', {layout: 'login'})
})

// @ desc Register
// @route GET /register
// router.get('/register', (req, res)=>{
//     res.render('Register')
// })

module.exports = router
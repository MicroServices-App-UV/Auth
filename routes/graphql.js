const express = require('express')
const executeQuery = require('../services/graphqlService')
const router = express.Router()

// @ desc Auth with Google
// @route GET /graphql/
router.get('/',  async(req, res)=>{
    const result =  await executeQuery()
    res.send(`<h1>${result.hello}</h1>`)
})
    
module.exports = router
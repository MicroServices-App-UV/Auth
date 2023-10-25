const express = require("express");
const executeQuery = require("../services/graphqlService");
const router = express.Router();
const graphqlService = require("../services/graphqlService");
// @ desc graphql endpoint to share userInfo
// @route GET /graphql/signup
router.get("/signup", graphqlService.shareUserInfo);

module.exports = router;

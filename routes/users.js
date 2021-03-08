const express = require('express');
const db = require('../db/models');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');


/* GET users listing. */
router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  res.render('user-login', {title: 'User Login', csrfToken: req.csrfToken()});
}));

router.post('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  
}));

module.exports = router;

const express = require('express');
const router = express.Router();
const { register } = require('../controller/auth.controllers');

router.get('/register', (req, res) => {
  res.render('register.ejs');
});

router.post('/register', register);

module.exports = router;

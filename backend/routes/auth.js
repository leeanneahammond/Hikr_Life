const express = require('express');
const router = express.Router();
const { time } = require('../controllers/auth');

router.get('/signup', signup);

module.exports = router;
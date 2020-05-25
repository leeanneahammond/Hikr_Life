const express = require('express');
const router = express.Router();
const { time } = require('../controllers/auth');

router.post('/signup', signup);

module.exports = router;
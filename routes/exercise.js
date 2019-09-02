const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user');

router.post('/new-user', user_controller.test);

module.exports = router;
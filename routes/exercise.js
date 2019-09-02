const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user');

router.post('/new-user', user_controller.addUser);

router.get('/users', user_controller.getAllUsers);

module.exports = router;
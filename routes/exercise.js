const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user');

router.post('/new-user', user_controller.addUser);

router.get('/users', user_controller.getAllUsers);

router.post('/add', user_controller.addExercise);

router.get('/log', user_controller.getLog);

module.exports = router;
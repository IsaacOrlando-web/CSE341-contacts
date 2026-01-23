const express = require('express');
const router  = express.Router();
const usersController = require('../controllers/users');
const { check, validationResult } = require('express-validator');
const { userValidationRules, validate } = require('../validator/validator');

router.get('/', usersController.getAllUsers);

router.get('/:id', usersController.getSingle);

router.post('/',
    userValidationRules(),
    validate,
    usersController.createUser
);

router.put('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;
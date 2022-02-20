const {Router} = require('express');

const userController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.get('/', userController.renderUsers);
usersRouter.post('/:id', userController.getUserById);
usersRouter.get('/:id', userController.postUserById);

module.exports = usersRouter;
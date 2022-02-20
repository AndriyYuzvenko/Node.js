const {Router} = require('express');

const loginController = require('../controllers/loginController');
const loginValid = require('../middleware/loginValue');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', loginValid, loginController.postLogin);

module.exports = loginRouter;
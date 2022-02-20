const {Router} = require('express');

const signInController = require('../controllers/signInController');
const signIdValue = require('../middleware/signInValue');

const signInRouter = Router();

signInRouter.get('/', signInController.getSignIn);
signInRouter.post('/', signIdValue, signInController.postSignIn);

module.exports = signInRouter;

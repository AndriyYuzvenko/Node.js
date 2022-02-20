const {Router} = require('express');

const usersRouter = require('../routes/usersRouters');
const loginRouter = require('../routes/loginRouter');
const signInRouter = require('../routes/signInRouter');

const router = Router();

router.use('/login', loginRouter);
router.use('/users', usersRouter);
router.use('/signIn', signInRouter);
router.use((req, res) => {
    res.render('notFound');
});

module.exports = router;
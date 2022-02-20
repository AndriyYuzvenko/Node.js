class SignInController {
    getSignIn(req, res) {
        res.render('signIn');
    }

    postSignIn({body}, res) {
        res.redirect('/users');
    }
}

module.exports = new SignInController();
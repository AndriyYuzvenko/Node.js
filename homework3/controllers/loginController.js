const users = require('../Db/users');

class LoginController {
    renderLogin(req, res) {
        res.render('login');
    }

    postLogin({body}, res) {
        const userEmail = users.find(item => item.email === body.email);
        if (userEmail) {
            res.redirect('/error');
        } else {
            users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
            res.redirect('/signIn');
        }
    }
}

module.exports = new LoginController();
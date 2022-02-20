const users = require('../Db/users');

class UsersController {
    renderUsers({query}, res) {
        if (Object.keys(query).length) {
            let usersArray = [...users];
            if (query.city) {
                usersArray = usersArray.filter(user => user.city === query.city);
            }
            if (query.age) {
                usersArray = usersArray.filter(user => user.age === query.age);
            }
            res.render('users', {users: usersArray});
            return;
        }
        res.render('users', {users});
    }

    getUserById(req, res) {
        const {id} = req.params;
        const index = users.findIndex(n => n.id === id);
        if (index === -1) {
            users.splice(index - 1, 1);
        }
        res.redirect('/users');
    }

    postUserById({params}, res) {
        const userId = users.find(item => item.id === +params.id);
        if (userId) {
            res.render('userInfo', {userId});
        } else {
            res.redirect('/error');
        }
    }
}

module.exports = new UsersController();
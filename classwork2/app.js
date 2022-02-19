const express = require('express')
const path = require('path')
const {engine} = require('express-handlebars')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

let users = []

app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/signIn', (req, res) => {
    res.render('signIn')
})

app.get('/users', ({query}, res) => {
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
});

app.post('/signIn', ({body}, res) => {
    const emailFind = users.find(item => item.email === body.email)
    const passwordFind = users.find(item => item.password === body.password)
    if (passwordFind && emailFind) {
        res.redirect('/users')
    } else {
        res.redirect('/error')
    }
})

app.post('/login', ({body}, res) => {
    const userEmail = users.find(item => item.email === body.email)
    if (userEmail) {
        res.redirect('/error')
    } else {
        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1})
        res.redirect('/signIn')
    }
})

app.post('/users/:id', (req, res) => {
    const {id} = req.params;
    const index = users.findIndex(n => n.id === id);
    if (index === -1) {
        users.splice(index - 1, 1);
    }
    res.redirect('/users');
});

app.get('/users/:id', ({params}, res) => {
    const userId = users.find(item => item.id === +params.id)

    if (userId) {
        res.render('userInfo', {userId});
    } else {
        res.redirect('/error');
    }
})
app.use((req, res) => {
    res.render('notFound')
})

app.listen(5000, () => {
    console.log('port 2221')
})
const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const apiRouters = require('./routes/apiRouter');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRouters);

app.listen(5000, () => {
    console.log('port 2221');
})
const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))

fakeApi = () => {
return [
        {
            name: 'praveen',
            lane: 'midlaner'
        },
        {
            name: 'Jayce',
            lane: 'toplaner'
        },
        {
            name: 'Heimerdinger',
            lane: 'toplaner'
        },
        {
            name: 'Zed',
            lane: 'midlaner'
        },
        {
            name: 'Azir',
            lane: 'midlaner'
        }
];
}

app.get('/', (req, res) => {
    res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
});
app.get('/landing', (req, res) => {
    res.render('landing');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/diary', (req, res) => {
    res.render('yourDiary');
});
app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.listen(port, () => console.log(`App listening to port ${port}`));
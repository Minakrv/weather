const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const getWeather = require('./lib/getweather');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engin', '.hbs');
app.get('/', async(req, res) => {
    let data = await getWeather();
    let name = data.name;
    let temp = data.main.temp;
    res.render('index', {name, temp});
});
app.get('/weather', (req, res)=>{
    res.render('weather');
});
app.get('*', (req, res)=>{
    res.render('404');
});

app.listen(3000 , ()=>{
    console.log('listening on port 3000');
});
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Matija'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Matija'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Help!',
        title: 'Help',
        name: 'Matija'
    });
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'test',
        location: 'Dugo Selo'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Matija',
        errorMsg: 'Help article Not found'
    })
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Matija',
        errorMsg: 'Not found'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
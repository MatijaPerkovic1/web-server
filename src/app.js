const path = require('path');
const express = require('express');

const publicDirectoryPath = path.join(__dirname, '../public');

const app = express();

app.set('view engine', 'hbs');

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
    });
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'test',
        location: 'Dugo Selo'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
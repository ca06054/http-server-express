const express = require('express');
require('dotenv').config()
const puerto = process.env.PUERTO;
const app = express();
app.use(express.static('public'));


app.set('view engine', 'hbs');
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) { });


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Henry Cortez',
        titulo: 'Curso de Nodejs'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Henry Cortez',
        titulo: 'Curso de Nodejs'
    });
});

app.get('/elements', (req, res) => {
   res.render('elements',{
    nombre: 'Henry Cortez',
    titulo: 'Curso de Nodejs'
});
});

app.get('/getJson', (request, response) => {
    const persona = {
        id: '1',
        nombre: 'Henry Cortez'
    };
    response.setHeader('Content-Type', 'application/json');
    response.send(persona);

});

app.get('/getCsv', (req, res) => {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attatchment; filename="reporte.csv"');
    res.send('id,nombre\n1,Henry Cortez\n2,Luis Marroquin');

});

app.get('/user/:id', (req, res) => {

    const { id } = req.params;
    res.setHeader('Content-Type', 'application/json');
    res.send({ id });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');

});

app.listen(puerto, () => {
    console.log(`Server corriendo en puerto: ${puerto}`);
});
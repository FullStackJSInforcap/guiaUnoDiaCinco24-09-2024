const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Bienvenido a mi web');
});

app.get('/about', (req, res) => {
    res.send('Me gusta programar y compartir');
});

app.get('/usuario/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const regex = new RegExp('^[aeiouAEIOU]');
    if (regex.test(nombre)) {
        res.send(`El nombre ${nombre} empieza con VOCAL`);
        return;
    }
    res.send(`El nombre ${nombre} no empieza con VOCAL`);
});

app.get('/musica', (req, res) => {
    res.redirect('https://open.spotify.com/intl-es');
});

app.get('/colores', (req, res, next) => {
    const color = req.query.color;
    if (color.toLowerCase() == 'azul') {
        next(res.send('Cumple'));
    } else {
        next(res.send('No cumple'));
    }
});

app.get('*', (req, res) => {
    res.send('404 not found');
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});
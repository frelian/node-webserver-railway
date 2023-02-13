import express from 'express';
import hbs from 'hbs';
import * as dotenv from 'dotenv';
dotenv.config();

const { pathname: root } = new URL('./', import.meta.url)
const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(root + '/views/partials');

// Servir/publicar contenido estatico - Middleware
app.use( express.static('public') );
// Cuando se configura la linea anterior entonces si creo la ruta "/" se omite

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Julian Niño',
        title: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Julian Niño',
        title: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Julian Niño',
        title: 'Curso de Node'
    });
})


// Comodin, cualquier ruta que no sea las anteriores entonces:
app.get('*', (req, res) => {
    res.sendFile( root + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
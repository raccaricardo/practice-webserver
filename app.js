
const express = require('express');
const hbs = require(`hbs`);
require('dotenv').config();


const app = express();
const port = process.env.PORT;  

//uso de middlewares para servir contenido estatico en este caso
app.use(express.static('public' ));//si la carpeta public no esta 
//en la raiz hay que escribir la ruta exacta
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials')
app.get('/', (req, res) =>{
    res.render('home',{
        name: 'Ricardo',
        title: 'Curso node'
    });

})
app.get('/generic', (req, res) =>{
    res.render( 'generic', {
        name: 'Ricardo',
        title: 'Curso node'
    } );

})
app.get('/elements', (req, res) =>{
    res.render( 'elements', {
        name: 'Ricardo',
        title: 'Curso node'
    } );

})
app.get('/*', (req, res) =>{
    res.sendFile(__dirname + '/public/404.html');

})
app.get('/bye',(req, res) =>{ 
    res.send('Adios mundo pagina');

})
app.listen(port);
console.log('escuchando en puerto: ', port);
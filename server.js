const express = require('express');

const app = express();


const port = process.env.PORT || 3000;


const hbs = require('hbs');
require('./hbs/helpers');


app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'gonzalo',
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
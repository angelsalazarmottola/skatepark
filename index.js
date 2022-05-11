const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const expressFileUpload = require('express-fileupload');
const axios = require('axios');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const secretKey = 'shhhhhh';

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto ${port}`)
});

// midlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(
    expressFileUpload({
        limits: 5000000,
        abortOnLimit: true,
        responseOnLimit: 'El tamaño del archivo supera el límite permitido 5MB',
    })
);
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.set('view engine', 'handlebars');

app.engine(
    'handlebars',
    exphbs.engine({
        defaultLayout: 'Main',
        layoutsDir: `${__dirname}/views/layout`,
        partialsDir: `${__dirname}/views/components`,
    })
);

app.get ('/', (req, res) => {
    res.render('Index')
});

app.get ('/login', (req, res) => {
    res.render('Login')
});

app.get ('/registro', (req, res) => {
    res.render('Registro')
});


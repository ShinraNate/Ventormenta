const express = require('express');
const app = express();
const path= require('path');

require('./conecction');

//Configuracion
app.set('port', '3000');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


//rutas
app.use(require('./routes/usuarios'));
app.use(require('./routes/views'));

//Servidor
app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
})

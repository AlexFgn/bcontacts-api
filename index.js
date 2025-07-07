// 3**

//Carga variables de entorno desde .env antes de usarla
//Cargame las variables de .env = MONGO_URI  PUERTO
require('dotenv').config()

// Importamos express para crear el servidor http
const express = require('express');
// Importamos mongoose para conectar a MongoDB
const mongoose = require ('mongoose');

// Creamos la instancia del servidor
const servidor = express();

// parseamos las peticiones en formato json
servidor.use(express.json());

// conexion a MongoDB altas usando la URI de .env
// Usamos URI no URL
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log('Conectado a MondoDB Atlas'))
    .catch(err=> console.error('Error al conectar:',err));


    // 5.1**

    // Montamos las rutas (GET/POST)
    const rutasContactos = require('./routes/contactos');
    servidor.use('/api/contactos', rutasContactos)
    
// Arrancamos el servidor en el puerto definido en .env o 3000
const puerto = process.env.PUERTO || 3000;
servidor.listen(puerto,()=>{
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
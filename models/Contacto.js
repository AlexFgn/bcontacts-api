// 4**

const mongoose = require('mongoose');

//Definir el esquema para un contacto

const esquemaContacto = new mongoose.Schema({
    nombre: {type: String, require: true}, //nombre sera obligatorio
    correo: {type: String, require: true}, //correo obligatorio
    telefono: {type: String}, //Telefono opcional
    // añadido por mi
    empresa: {type: String, require: true}

    
});

// Exportamos el modelo con nombre 'Contacto'
module.exports = mongoose.model('Contacto', esquemaContacto);

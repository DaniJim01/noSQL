require('dotenv').config(); //Jala toda la configuracion del archivo .env


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI).
then(() => {
    console.log('Conectado a la base de datos');
})
.catch((error) => {
    console.error('Error al conectar a la base de datos:', error)
});

app.use('/api/carro', require('./routes/CarroRoutes'));

app.listen(PORT, ()=>{
    console.log("Servidor encendido en: http://localhost:" + PORT + "/api/carro");
});


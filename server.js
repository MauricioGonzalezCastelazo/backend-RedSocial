const mongoose = require('mongoose'); //para usar la base de datos
const dotenv = require('dotenv');
dotenv.config({ path: 'config.env' });
const app = require('./app');

const mongoDB = async (DB) => { //conectar con la base
    try {
        const con = mongoose.connect(DB);
        console.log("Conexion exitosa");
    } catch (err) {
        console.log("Error al conectar con la base");

    }
}

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoDB(DB);

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Se ha iniciado el servidor");

}); //inicia un servidor

const express = require('express');
const app = express();
const cors = require('cors');

//Importar conexion mongoDB
const dbConnect = require('./conexion');
dbConnect();

//Importación de archivo de rutas y modelo de usuario
const rutausuario = require('./rutas/usuario');

app.use(express.json())
app.use(cors());
app.use('/api/usuario', rutausuario);


app.get('/', (req, res) => {
    res.end(`<h1>connecting to: ${port}</h1>`)
});

const port = 5000;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
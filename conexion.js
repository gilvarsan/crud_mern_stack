const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const DB_URI = 'mongodb://127.0.0.1:27017/crudmernstack';
    await mongoose.connect(DB_URI, {
    });
    console.log('Conexión a la base de datos establecida correctamente');
    // Puedes agregar más lógica aquí después de que se establezca la conexión
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

module.exports = dbConnect;

/*
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');
const bd = mongoose.connection;
bd.on('connected', () => console.log('Conexión correcta a MongoDB'));
bd.on('error', () => console.log('Error en la Conexión a MongoDB'));
module.exports = mongoose;
*/
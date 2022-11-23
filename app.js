const argv = require('./config/yargs');
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

crearArchivo( argv.base, argv.listar, argv.hasta )
  .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch( err => console.log(err));
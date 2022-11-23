const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

  try {
    let salida = `====================\n    Tabla del ${ base }\n====================\n`;
    let consola = `${'===================='.green }\n    ${ 'Tabla del'.blue } ${ colors.blue( base ) }\n${ '===================='.green }\n`;

    for (let i = 1; i <= hasta; i++) {
      salida += `    ${ base } x ${ i } = ${ base * i }\n`;
      consola += `    ${ base } ${ 'x'.blue } ${ i } ${ '='.blue } ${ base * i }\n`;
    }
    salida += '====================';
    consola += '===================='.green;

    if ( listar ) {
      console.log(consola);
    }

    fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

    return `tabla-${ base }.txt`;

  } catch (err) {
    throw err;
  }

}

module.exports = {
  crearArchivo
}
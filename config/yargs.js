const argv = require('yargs')
              .option('b', {
                alias: 'base',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar',
                type: 'number'
              })
              .option('h', {
                alias: 'hasta',
                default: 10,
                describe: 'Este es el número hasta donde quieres la tabla',
                type: 'number'
              })
              .option('l', {
                alias: 'listar',
                default: false,
                describe: 'Muestra la tabla en consola',
                type: 'boolean'
              })
              .check( (argv, options) => {
                if( isNaN(argv.base) ) {
                  throw 'La base tiene que ser un número';
                }
                return true;
              })
              .argv;

module.exports = argv;
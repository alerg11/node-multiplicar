const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

//process: objeto creado por node cuando corre
// let argv2 = process.argv;
// let parametro = argv2[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];

switch (comando) {
    case 'listar':
            listarTabla(argv.base, argv.limite)
            .then(resp => console.log(resp.green))
            .catch(error => console.log(error));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado', colors.green(archivo)))
            .catch(error => console.log(error));
        break;

    default:
        console.log('Comando no encontrado');
}

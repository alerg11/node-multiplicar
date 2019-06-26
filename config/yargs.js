const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
        .command('listar', 'Imprime la tabla en consola', opts)
        .command('crear', 'Crea un archivo con la tabla', opts)
        .help()
        .argv;


module.exports = {
    argv
}
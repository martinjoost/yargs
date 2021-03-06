
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { createFile, listTable } = require('./multiply/multiply');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listTable(argv.base ,argv.limit);
    break;
    case 'crear':
        createFile(argv.base, argv.limit)
        .then( (archivo)=>{
            console.log(`Archivo creado: ${colors.green(archivo)}`);
        })
        .catch( err=>console.log(err));
    break;
    default:
        console.log("Comando no reconocido");
        
}
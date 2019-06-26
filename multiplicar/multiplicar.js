const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        
        if (!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            // Si se pone solo el reject, la funcion sigue.
            return;
        }
        
        let data = '';

        for(let i =1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`
        }

        fs.writeFile(`files/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) { 
                reject(err);
            }
            else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }
        });
    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve,reject) => {
        if (!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        else {
            let data = '';

            for(let i =1; i <= limite; i++){
                data += `${base} * ${i} = ${base * i}\n`
            }

            resolve(data);
        }
        
    })
}

//Objeto propio de node
module.exports = {
    crearArchivo,
    listarTabla
}
const os = require('os');
const fs = require('fs');
const http = require('http');

//Ejemplos de Librerias de OS
console.log(os.platform());
console.log(os.release());
console.log('Memoria Libre', os.freemem(), 'bytes');
console.log('Memoria', os.totalmem(), 'bytes');  
 

//Ejemplos de Librerias de fs

fs.writeFile('./aldo.txt', 'Probando Write con fs ❤  He\'re Playing Basketball ', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('archivo creado');
})

fs.readFile('./aldo.txt',function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
} )

//Ejemplos de Librerias HTTP


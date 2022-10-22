document.write("<h1>Hola Guapa</h1>")
console.log(['Aldo', 'Cesar', 'Iriam'])
console.log({
    "username": 'Aldo',
    "puntuacion": 100,
    "horas": 14,
    "profesional": true,
    "Amigos" : ['Iriam', 'Octavio', 'Glendy']
})

let nombredelusuario= "Aldo";
let Input = 'Aldo'
let result = Input == nombredelusuario;

if (result == true){
    console.log("Correcto")
}
else {
    console.log("Incorrecto")
}

/*let contar = 0;
while (contar <= 50){
    console.log (contar)
    contar ++;
}
*/
let Amigos =  ['Iriam', 'Octavio', 'Glendy'];

for(let i = Amigos.length - 1; i >= 0; i--){
    console.log (Amigos[i]);
}

function saludos(numero1, numero2){
   console.log(numero1+numero2) 
}

saludos(5,2);
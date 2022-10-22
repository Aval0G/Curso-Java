// Los comentarios te ayudan a explciar el codigo
// Cualquier cosa que inicia con // se trata de un comentario
// La computadora no las interpreta como codigo

// La siguiente linea da un mensaje en consola
console.log('Hi!'); // Pueden existir comentarios a la vez que codigo


//tipos de datos JavaScript
"Aldopis" //String C 
'Aldo'   //String  C
'Aldo ❤' //String con emojis
"He \'re Playing Basketball "
//No se puede combinar como "Aldo' o 'Aldo"
//Puede incluir desde letras, numeros, simbolos hasta emojis
// Puedes usar \ para usar comillas simples

1000      //Number
-5 -2     //Number

true / false //Boolean

//array   (Un conjunto para revisar o obtener un dato)
['Aldo', 'Cesar', 'Iriam']
[5, 7, 8]
[true, false, true, false]

//object (Un conjunto de datos para representar algo)
 //Quedan entre comillas por que son nombres claves
console.log({
    "username": 'Aldo',
    "puntuacion": 100,
    "horas": 14,
    "profesional": true,
    "Amigos" : ['Iriam', 'Octavio', 'Glendy']
})

//Declaracion de variables (Puede cambiar en el transcurso)
// Letras, _ , $
// Pueden contener Numeros, Letras, _ , $
// Var y Let no pueden ser nombres

//  Tipo nombre valor
    var numero = 10;     //Variable con valor igualado a 10
    let numerito = 12;   //Variable con valor igualado a 12 

//Declaracion de Constante (No puede cambiar)

const Aldolo = 0 //Constante

//Condicionales

if (85 == 10){
    console.log("Correcto")
}
else {
    console.log("Incorrecto")
}

//  While (Cadenas)
let contar = 50;
while (contar >= 0){
    console.log (contar)
    contar --;
}

// For (Cadenas)
let Amigos =  ['Iriam', 'Octavio', 'Glendy'];

for(let i = Amigos.length - 1; i >= 0; i--){
    console.log (Amigos[i]);
}

//Funcion
function saludos(){
    console.log ("Holaaaaa")
}

saludos();


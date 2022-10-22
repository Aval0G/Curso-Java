// Los comentarios te ayudan a explciar el codigo
// Cualquier cosa que inicia con // se trata de un comentario
// La computadora no las interpreta como codigo

// La siguiente linea da un mensaje en consola
console.log('Hi!'); // Pueden existir comentarios a la vez que codigo


//Operadores Logicos

if (!7) console.log(4);//Vuelve los verdaderos falsos y viceversa
if (5 || 5) console.log(5); // O cumple
if (5 && 7) console.log(4); // y cumple tambien 



//Puedes usar console.log() para imprimir un dato en consola 
//Ejemplos de impresion de datos
let boolean = true;
let cadena= 'abc';

console.log('Hola!'); // -> Hello!
console.log(false); // -> false
console.log(boolean); // -> true
console.log(cadena); // -> abc


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

//Puedes reasignar un valor a una variable de la forma:(sin usar de nuevo let)
let variable = 'abc';
console.log(variable); // -> abc

variable = 25;
console.log(variable); // -> 25

variable = false;
console.log(variable); // -> false

//Puedes copiar el valor de una variable en otra de la forma 
let variables = 'abc';
let variableCopy = variables;
variable = 'def';

console.log(variables); // -> def
console.log(variableCopy); // -> abc

//Indefinido (undefined) Sucede cuando no existe un valor para esa variable
let variablel;
console.log(variablel); // -> undefined

//Sin valor (Null) Cuando quieres declarar que algo no tiene valor:
let variableN = null;
console.log(variableN); // -> null

//NaN Not a number significa que algo no es un numero por lo que no puede retornar valor
let string1 = 'Hola ';
let string2 = 'Ustedes!';

console.log(string1 - string2); // -> NaN
console.log(string1 * string2); // -> NaN
console.log(string1 / string2); // -> NaN
console.log(string1 % string2); // -> NaN

//Declaracion de Constante (No puede cambiar)

const Aldolo = 0 //Constante

/*Condicional if-else
if(condicion) {
    // ejecuta esta si es verdad
} else {
    // ejecuta esta si es falso
}

Valores que son en automatico Falso el resto son Verdadero a menos que tengan una condicion
false
null
undefined
'' or "" (empty, 0-length string)
0 (the number zero)
NaN
*/

//Ejemplo
if (85 == 10){
    console.log("Correcto")
}
else {
    console.log("Incorrecto")
}

//Puedes evitar usar {} si el codigo es de una sola linea ya sea if o else
let falseFlag = false;

if(falseFlag) console.log('Esto no se imprime.');
else console.log('Esto se imprime');


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


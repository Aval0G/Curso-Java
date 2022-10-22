/*Modulos
 dividen una aplicacion en diversisas partes tipo

 Exporto y divido math.js para tener cada uno por separado de un mismo .js
    exports.divi = divi;
    exports.resta = resta;
    exports.multi = multi;
    exports.suma = suma;
    
y las importo a inicio.js
*/

exports.funcion = funcion; //añade una nueva propiedad al objetos
module.exports= objeto //exporta un objeto o funcion


















/* Apuntes del Ejercicio en mucho detalle




Node es un entorno para correr JavaScript fuera del navegador es multiplataforma

El servidor con node maneja las conexiones de manera asíncrona.

COMO COMPROBAR QUE ESTA INSTALADO NODE?
-abrimos la consola y ejecutamos el comando | node --version

VAMOS A ESCRIBIR NUESTRO PRIMER HOLA MUNDO EN NODE
-creamos un archivo JavaScript, ya que todos los programas que corre node son js
-creamos dentro de este archivo un console.log("") pero lo voy a correr no en el navegador, en el SO

cómo vamos a correr ese JavaScript con node? 
-desde consola me muevo a la carpeta
-escribimos node NOMBRE_ARCHIVO_A_EJECUTAR.js
- y por consola vemos el hola mundo



-------- MODULOS EN NODE --------
Creamos un index.js dentro de mi carpeta
y en ese index.js creo varias funciones que sumaran, restar, multiplicara y dividir
y más abajo llamo a las funciones pasando los parámetros
Y SI LLAMO desde la consola a | node index.js | me muestra en consola un 3 la suma de 1 y 2 igual para los demás métodos

¿COMO HAGO MIS ARCHIVOS COMO MODULOS? CREO UN ARCHIVO LLAMADO MATEMATICA Y PEGO EN EL TODAS LAS FUNCIONES DE SUMA, ECT 
-ahora quiero traerme todas las funciones de MATEMATICA a el index.js cómo?     
-usando una palabra clave llamada require("./matematica.js"); y dentro como parámetro la ruta del archivo
-Y para usar las funciones almacenamos todo ese modulo dentro de una const | const matemática = require("./matematica.js")
- pero si queremos llamar a una función de ese modulo tenemos que hacerlo con la nomenclatura del punto | matematica.dividir(1,2)

PERO ANTES TENGO QUE EXPORTAR DESDE EL MODULO LAS FUNCIONES
-exportamos se define con la palabra exports.NOMBRE y cuando se llame desde otro archivo el nombre sumar que utilice la función sumar desde otro archivo | exports.sumar = sumar
-así que cuando desde mi archivo llame a matematicas.suma ejecuta la función del modulo

plus: las funciones que no retornen nada retornan un undefined

cuando usamos require y almacenamos en una const ese modulo, tenemos en la constante un objeto y que tiene múltiples propiedades, esas propiedades almacenan las funciones
-así que podemos también crear un objeto en el módulo añadirle propiedades que serán las funciones y lo exportamos así: module.exports = Math; // asi estaria exportando el objeto

Manera de exportar módulos:
module.exports: puede exportar objetos, funciones y de todo | si exportamos una función se recibe así en el index.js matemática(parámetros)
export.nombre = nombre; (esto exporta una propiedad de un objeto )



-------- Módulos preconstruidos en Nodejs -------------
Son módulos propios de node y para llamarlos se llaman igual solo que el nombre del módulo directamente
Vamos a probar el módulo del sistema operativo llamado OS lo importamos y lo que me retorna el módulo lo guardo en const os

También vamos a probar el módulo de filesystem:
- File System nos permite trabajar con los archivos de SO, para interactuar con archivos
- writeFile para crear un nuevo archivo y es asíncrono | parámetros 1-recibe la ruta 2-el contenido 3-callback función que se ejecuta cuando termina el proceso anterior, y se ejecuta cuando termine la acción Recibe el error
- para leer archivos con readFile y es asíncrono | parámetros 1-el archivo 2-cuando termine la operación asíncrona ejecutara este callback (recibe un error o los datos que están dentro de este archivo en formato crudo)




----------- Código asíncrono -----------------------
La tarea de crear un archivo no es tarea de node es tarea del SO, node le dice:
-sistema operativo crea un archivo cuando termines ejecuta la función, el callback
-mientras termina de crear el archivo sigue ejecutando el código
-así que veremos en consola primero el ultima línea de código y después el archivo creado




-------------- Modulo Http en Nodejs --------------------
Este módulo lo que nos permite usar HTTP en nuestro servidor, recibe peticiones HTTP y da respuestas a los clientes desde el server

Creamos un servidor con este módulo con el método createServer y recibe un callback con:
- createServer me retorna un objeto | cuando termines de crear este servidor ejecuta el callback, recibe por parámetro la petición (request | req) y la respuesta del server (response | res) | cuando el servidor ya este inicializado, le decimos en que puerto va a escuchar mi servidor y cuando escuche muestre por consola un mensaje
- respondemos con el parámetro de respuesta un un h1 cada vez que entren al sitio web y termina la respuesta, va a seguir recibiendo peticiones de otros usuarios
- la consola se queda escuchando y si vamos a ese puerto desde el navegador nos sale el h1 | http://localhost:2800/


CUANDO RESPONDEMOS ALGO, LE PODEMOS DECIR EN LA CABECERA EL TIPO DE CONTENIDO y el código de estado HTTP
- Voy a escribir una cabecera para darle más info al navegador, parámetros 1ero código de estado HTTP (200 o 404) 2do un objeto con el tipo de contenido (HTML) o texto plano
- si vamos a la consola y abrimos las secciones de network y vemos dos peticiones con el código de estado y el tipo de documento




--------------------- NPM -------------------------
NPM = Node Package Manager (administrador de paquetes de node)

NPM Sirve para instalar paquetes que vienen de otra parte, que no vienen en node.
En nuestro caso instalaremos uno de colors para darle color a los textos de consola
- comando dentro del proyecto y lo instala desde npmjs.com| npm install colors

Después de ejecutar el comando, en mi proyecto veo una carpeta nueva (node_modules) y un archivo llamado package-lock.json | así trabaja internamente npm y node
- node_modules es para contener los nuevos módulos que instalamos
- package-lock.json lista que módulos se han instalado

YA LUEGO PUEDO IMPORTAR ESE MODULO EN MIS ARCHIVOS | const colors = require("colors");
- y para agregarle color a un string se le pone un punto | "hola".green o "hola".yellow


CUANDO QUEREMOS USAR OTRO PC, NECESITAMOS INSTALAR TODOS ESTOS MODULOS DE NUESTRO PROYECTO | npm init, package.json y npm install (npm i), npm start
- Comando que crea la información del proyecto (package.json) | npm init
- Ese comando nos pide el nombre del paquete, la versión, una descripción, el punto de entrada de mi app, el repo de git, palabras clave de cómo pueden conseguir mi proyecto, el autor y por último me dice esta esto bien
- Y me aparece en mi proyecto un archivo | package.json | es un archivo de información sobre mi proyecto y aparecen las dependencias así sabe node que mi proyecto depende de esos módulos y los scripts podemos usar uno que nos da npm llamado start así cuando desde la console ejecute el comando npm start hace algo (en este caso inicia el servidor | node index.js)

Imaginemos que subo mi app a un server o un servicio en la nube, solo subo el código no los módulos y desde el servidor ejecuto npm install lee el package.json e instala las dependencias con npm install.

CONCEPTOS GENERALES de NPM:
- node_modules es para contener los nuevos módulos que instalamos
- package-lock.json lista que módulos se han instalado
- package.json es un archivo de configuración con información sobre mi proyecto, aparecen las dependencias así sabe node que mi proyecto depende de esos módulos, cuando ejecuten el npm install LOS INSTALA. y también tiene los scripts npm start, y cuando desde la consola ejecute el comando npm start hace algo (en este caso inicia el servidor | node modulos_node/modulo_HTTP/index.js), para scripts personalizados usamos npm run NOMBRE_COMANDO
- npm init para crear el package.json
- npm install o (npm i) | instala las dependencias necesarias para el proyecto (este comando lee el package.json)
- npm start o npm run NOMBRE_COMANDO | ejecuta lo que pongamos en el package.json en los scripts (en este caso inicia el servidor HTTP con node modulos_node/modulo_HTTP/index.js )
- npm install MODULO | instala un módulo de internet y guarda todos los módulos en la carpeta node_modules



----------------- EXPRESS ------------------
Es un framework para crear servidores sin hacerlo todo a mano y desde cero

Lo importamos, inicializo el servidor y le digo en que puerto va a escuchar luego si entran a una ruta en específico puedo responder algo con server.get("ruta", callback) el callback de ese método recibe por parametro una petición y una respuesta
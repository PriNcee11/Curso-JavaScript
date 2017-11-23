

// Hay explícita(usando un constructor) y literal(se define en el momento)

var reg1 = RegExp("a"); // Explícita
var reg2 = /a/; // Literal 

var texto = "Hola Mundo";

// Si existe devuelve un array, sino un Null
var arr = texto.match( reg1 );
console.log( arr ); // ["a", index: 3, input: "Hola Mundo"]

var regA = /A/;
var arr = texto.match( regA );
console.log( arr ); // null (es Case Sensitive)

// Hay 2 caracteres que cambian según el contexto

var arr = texto.match( /^a/ ); // (^) Busca si en la primera posición está
console.log( arr ); // null

var arr = texto.match( /^H/ ); 
console.log( arr ); // ["H", index: 0, input: "Hola Mundo"]

// Para buscar al final, no es /a^/ sino /a$/
var arr = texto.match( /o$/ ); 
console.log( arr ); // ["o", index: 9, input: "Hola Mundo"]

// Otro comodín es el punto (.), es cualquier caracter
var arr = texto.match( /.../ );
console.log( arr ); // ["Hol", index: 0, input: "Hola Mundo"]

var arr = texto.match( /^.o/ ); // Que el primer caracter sea cualquier cosa(^.) y el segundo (o)
console.log( arr ); // ["Hol", index: 0, input: "Hola Mundo"]


var texto2 = "Hola Mundo, 12345.";
var arr = texto.match( /[0-9]/ ); // rango
console.log( arr ); // null

var arr = texto2.match( /[0-9]/ ); // rango
console.log( arr ); // ["1", index: 12, input: "Hola Mundo, 12345."]

var arr = texto2.match( /[026789]/ );
console.log( arr ); // ["2", index: 13, input: "Hola Mundo, 12345."]

var arr = texto2.match( /[a-z]/ ); // La H no, es case sensitive
console.log( arr ); // ["o", index: 1, input: "Hola Mundo, 12345."]

var arr = texto2.match( /[a-zA-Z]/ ); // Ahora sí coge la H
console.log( arr ); // ["H", index: 0, input: "Hola Mundo, 12345."]

var arr = texto2.match( /^H[a-zA-Z]/ ); // Al principio una H y después una letra
console.log( arr ); // ["Ho", index: 0, input: "Hola Mundo, 12345."]

var arr = texto2.match( /[aeiou]./ ); // Cualquier vocal seguida de cualquier caracter
console.log( arr ); // ["ol", index: 1, input: "Hola Mundo, 12345."]

// Un espacio (/ /), una tabulación (/  /) también se puede, pero así buscas cualquier separación
var arr = texto2.match( /\s/ ); 
console.log( arr ); // [" ", index: 4, input: "Hola Mundo, 12345."]

// Al igual que la \s, hay \w
var arr = texto2.match( /\w/ ); // [a-zA-Z0-9]
console.log( arr ); // [" ", index: 4, input: "Hola Mundo, 12345."]

// i = insensible
// g = todas las apariciones
// m = multilinea
var arr = texto2.match( /m/i ); // busca la m tanto mayus como minus
console.log( arr ); // ["M", index: 5, input: "Hola Mundo, 12345."]

var arr = texto2.match( /[aeiou]/g ); // devuelve todas las vocales que encuentre
console.log( arr ); // (4) ["o", "a", "u", "o"]

// Se pueden combinar
var texto3 = "HOla MUndo, 12345.";
var arr = texto3.match( /[aeiou]/ig ); // vocales tanto mayus como minus
console.log( arr ); // (4) ["O", "a", "U", "o"]

var textoo = "Hola Mundooooooooo";
var arr = textoo.match( /o+/g ); // una o y otra cantidad de o (no 1 sólo como elcaso del punto)
console.log( arr ); // (2) ["o", "ooooooooo"]

var arr = texto.match( /o?/g ); // (hace match aunque el string esté vacío)
console.log( arr ); // (11) ["", "o", "", "", "", "", "", "", "", "o", ""]

var arr = texto.match( /o*/g ); // cero o más veces (hace match aunque el string esté vacío)
console.log( arr ); // (11) ["", "o", "", "", "", "", "", "", "", "o", ""]

var arr = textoo.match( /o{2}/ ); // tiene que aparecer 2 veces
console.log( arr ); // ["oo", index: 9, input: "Hola Mundooooooooo"]

var arr = textoo.match( /o{2,}/ ); // rango: tiene que aparecer al menos 2 veces (de 2 a 4 {2,4})
console.log( arr ); // ["ooooooooo", index: 9, input: "Hola Mundooooooooo"]

var texto4 = "Holaa mundoo Hoola de nuevooo";
var arr = texto4.match( /o{2,}/g ); // tiene que aparecer al menos 2 veces con todas las ocurrencias
console.log( arr ); // (3) ["oo", "oo", "ooo"]


var texto5 = "Aeropuerto";
var arr = texto5.match( /[aeiou]{2,}/ig );
console.log( arr ); // (2) ["Ae", "ue"]

var texto5 = "Aeropuerto";
var arr = texto5.match( /\w{2,2}/ig ); // agrupar las letras de 2 en 2
console.log( arr ); // (5) ["Ae", "ro", "pu", "er", "to"]

var texto6 = "La Respuesta de la suma es: 45 + 60 = 105";
var arr = texto6.match( /[0-9]{1,}/g ); // quiero obtener los números en sus "bloques" (/\d{1,}/g)
console.log( arr ); // (3) ["45", "60", "105"]

var arr = texto6.match( /\d{1,}|respuesta/ig ); // lo mismo con la pàlabra respuesta (i para la mayus)
console.log( arr ); // (4) ["Respuesta", "45", "60", "105"]

/**
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
 */
























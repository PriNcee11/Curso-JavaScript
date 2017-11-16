/**
 * OBJETO NUMBER
 */
console.error("OBJETO NUMBER");
var a = 10;
var b = Number(10);

// Ya sabemos que a === b es false

// Los numeros tienen ciertas funciones en su prototipo

var c = 10.456789;
console.log( c.toFixed(2) ); // 10.46 (Lo redondea)

console.log( c.toString() );

var d = 100.456789;
console.log( d.toPrecision(3) ); // 100
console.log( d.toPrecision(2) ); // 1.0e+2

// ¿Cuántos números aguanta la variable numérica? Hasta 308 dígitos exponenciales
a*=1000000000000000000000;
console.log(a); // 1e+22

a*=1000000000000000000000;
console.log(a); // 1e+43

a*=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
a*=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
a*=1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
console.log(a); // Infinity

a=a*-1;
console.log(a); // -Infinity


d = a*"f";
console.log(d); // NaN

var n = new Number("20");
console.log( n ); // Number {[[PrimitiveValue]]: 20}
console.log( n.valueOf() ); // 20



/**
 * OBJETO BOOLEAN
 */
console.error("OBJETO BOOLEAN");

var a = true;
var b = false;

var a = new Boolean();
console.log( a ); // Boolean {[[PrimitiveValue]]: false}

var a = new Boolean("-2");
console.log( a ); // Boolean {[[PrimitiveValue]]: true}

var a = new Boolean(-2);
console.log( a ); // Boolean {[[PrimitiveValue]]: true}

var a = new Boolean(2);
console.log( a ); // Boolean {[[PrimitiveValue]]: true}

var a = new Boolean(Infinity);
console.log( a ); // Boolean {[[PrimitiveValue]]: false}





/**
 * OBJETO STRING
 * En JS un objeto tipo string es un objeto, no como en otros lenguajes que son arrays de caracteres
 */
console.error("OBJETO STRING");

var a = new String("Iván");
console.log( a[0] ); // I funciona, ¿pero no hemos dicho que no es un array?
console.log( a ); // String {0: "I", 1: "v", 2: "á", 3: "n", length: 4, [[PrimitiveValue]]: "Iván"}

var a = "Iván";
console.log( a ); // Iván

console.log( a.toUpperCase() );
console.log( a.toLowerCase() );

var i = a.indexOf("n");
console.log( i ); // 3

var i = a.indexOf("a");
console.log( i ); // -1

var a = "nIván";
var i = a.lastIndexOf("n"); // la primera coincidencia desde el final
console.log( i ); // 4

var a = "Iván Martín Valderas";
var i = a.lastIndexOf("Martín"); // también sirve con palabras
console.log( i ); // 5

var numeros = "0123456789";
var substr = numeros.substr( 6 );
console.log( substr ); // 6789

var nombre = a.substr( 0, a.indexOf(" ") );
console.log( nombre ); // Iván

var nombreapellido = a.substr( 0, a.lastIndexOf(" ") );
console.log( nombreapellido ); // Iván Martín

var split = a.split();
console.log(split); // ["Iván Martín Valderas"]

var split = a.split(" ");
console.log(split); // ["Iván", "Martín", "Valderas"]
console.log(split.length); // 3










/**
 * OBJETO DATE
 */
console.error("OBJETO DATE");

var hoy = new Date();
console.log( hoy ); // Thu Nov 16 2017 08:24:28 GMT+0100 (Hora estándar romance)

var fechaMilisegundos = new Date( 1 ); // Convierte de milisegundos a fecha
console.log( fechaMilisegundos ); // Thu Jan 01 1970 01:00:00 GMT+0100 (Hora estándar romance)

var fechaFija = new Date( 2018, 0, 25, 7, 10, 59 ); // anio, mes, dia, hora, min, seg, mili
// si por ejemplo en la hora ponemos 24, sumará 1 día a la fecha
console.log( fechaFija ); // Thu Jan 25 2018 07:10:59 GMT+0100 (Hora estándar romance)

console.log( hoy.getFullYear() ); // 2017
console.log( hoy.getFullYear() +1 ); // 2018

console.log( hoy.getDate() ); // 16 el dia de hoy
console.log( hoy.getHours() ); // 8 la hora
console.log( hoy.getMonth() ); // 10 (es 11, noviembre, recordar que empieza en 0)
console.log( hoy.getTime() ); // 1510818014823 esto es hoy en milisegundos

var ahora = new Date( hoy.getTime() );
console.log( ahora ); // Thu Nov 16 2017 08:48:31 GMT+0100 (Hora estándar romance)

// Se puede ver el tiempo que tarda en hacer una operación
var inicio = new Date();
/* for (let i = 0; i < 15000; i++) {
    console.log("Algo...");
} */
var fin = new Date();

console.log( inicio ); // Thu Nov 16 2017 09:00:08 GMT+0100 (Hora estándar romance)
console.log( fin ); // Thu Nov 16 2017 09:00:09 GMT+0100 (Hora estándar romance)

var duracion = fin.getTime() - inicio.getTime();
console.log( (duracion/1000), 'segundos' ); // 1.345 "segundos"

/* momentjs */






/**
 * OPERACIONES CON FECHAS
 */















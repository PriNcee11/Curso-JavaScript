/**
 * OBJETO NUMBER
 */
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
 * OBJETO BOOLEAN
 * En JS un objeto tipo string es un objeto, no como en otros lenguajes que son arrays de caracteres
 */


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
console.log( "La letra está en: ", i ); // 4






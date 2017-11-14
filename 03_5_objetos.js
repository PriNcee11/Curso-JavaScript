
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








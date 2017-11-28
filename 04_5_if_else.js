


var a = 10;
var b = 20;

// Operador ternario
var c = ( a > b ) ? a : b;

// Nótese el paréntesis para autollamar a la función, sino asignaría ese código de la función a la variable 
var c = ( a > b ) ? function(){
    
    console.log("A es mayor que B");
    return a;

}() : function () {
    
    console.log("B es mayor que A");
    return b;

}();

console.log(c);



var a = 30;
var b = undefined;
var c = a || b; // devuelve el que es verdadero !(undefined, null, 0, false)
console.log(c); // 30

var a = 30;
var b = 5;
var c = a || b; // muestra el primero
console.log(c); // 30

var a = 0;
var b = 5;
var c = a || b; // 0 cuenta como false
console.log(c); // 5

var a = null;
var b = 5;
var c = a || b; // null cuenta como false
console.log(c); // 5



/**
 * ESTO ES MUY ÚTIL CUANDO HACEMOS FUNCIONES QUE ESPERAN PARÁMETROS
 */


function getNombre( nombre ){
    var nom = nombre || "sin nombre";
    // si ninguna condición es verdadera, devuelve la última, auqnue undefined tiene más peso
    var nom = null || null || null || false || 0 || null || undefined;

    console.log( nom );
}

getNombre(); // sin nombre
getNombre("Yo"); // Yo












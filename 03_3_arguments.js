/* Las funciones también tienen un prototype */
// myFunction.prototype

var arguments = 10;

function myFunction(a,b,c,d){
    console.log( arguments );
}

myFunction(10); // Los argumentos hacen referencia a los valores que se le pasan desde la invocación

/* */

function myFunction2(){
    console.log( arguments );
}

myFunction(10); // En otros lenguajes esto explota, pero JS obtiene el 10 en los argumentos igualmente

/* */

function myFunction3(a,b,c,d){

    if( arguments.length !== 4 ){
        console.error("La función necesita 4 parámetros");
        return; // salimos sin hacer nada más
    }

    console.log( a + b + c + d ); // NaN Not a Number
    console.log( a , b , c , d ); // 10 20 30 undefined
}

myFunction3(10, 20, 30); 


/**
 * Sobrecarga de operadores
 */

function crearProducto(nombre, precio){
    // function crearProducto(nombre, precio = 10){ ESTO NO SE PUEDE HACER
    nombre = nombre || "sin nombre";
    precio = precio || 0;

    console.log("Producto: ", nombre, "Precio: ", precio);
}

function crearProducto100(nombre){
    crearProducto(nombre, 100);
}

function crearProductoCamisa(precio){
    crearProducto("Camisa", precio);
}

crearProducto("Lapiz");
crearProducto100("Corrector");
crearProductoCamisa(75);












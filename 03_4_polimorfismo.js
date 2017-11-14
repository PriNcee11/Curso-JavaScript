/**
 * POLIMORFISMO: Una funcion que puede recibir diferentes tipos de datos
 */


function determinaDato( a ){
    if( a === undefined ){
        console.log("A es undefined...");
    }

    if( typeof a === "number" ){
        console.log("A es un numero");
    }

    if( typeof a === "string" ){
        console.log("A es un texto");
    }

    if( typeof a === "object" ){
        console.log("A es un objeto");

        if( a instanceof Number ){
            console.log("A es un objeto numérico");
        }
    }
}

determinaDato();        // A es undefined...
determinaDato(1);       // A es un numero
determinaDato("asd");   // A es un texto
determinaDato({nombre: "Iván"}); // A es un objeto

var b = new Number(3);
console.log(b);     // Number {[[PrimitiveValue]]: 3} es un nuevo objeto primitivo y da 3
determinaDato(b);   // A es un objeto
console.log(b + 10); // 13 -> Se maneja como un numero pero es un objeto



/* CUIDADO CON LAS FUNCIONES Y SU CONTEXTO */
/**
 * Los closures son funciones que manejan variables independientes. 
 * En otras palabras, la función definida en el closure "recuerda" el entorno en el que se ha creado. 
 * (fuente original - https://developer.mozilla.org/es/docs/Web/JavaScript/Closures )
 */
console.info("------------------------");
console.info("CUIDADO CON LAS FUNCIONES Y SU CONTEXTO");
console.info("------------------------");

function crearFunciones(){
    var arr = [];
    var numero = 1;

    for( var numero =1; numero<=5; numero++){
        arr.push(
            (function(numero){ // Aquí creas un nuevo contexto, JS ya sabe que valor es en este instante y lo devuelve
                return function(){ 
                    console.log( numero );
                }
            })(numero)
        )
    }


/*     numero = 2;
    arr.push(function(){
        console.log( numero );
    })

    numero = 3;
    arr.push(function(){
        console.log( numero );
    }) */

    return arr;
}

var funciones = crearFunciones(); // En este punto numero tendrá su valor más alto

// Luego ya estas llamadas lo harán sobre ese numero
funciones[0](); // 3
funciones[1](); // 3
funciones[2](); // 3

// ¿Cómo recuperar los valores de la variable numero en cada punto? Funciones anónimas






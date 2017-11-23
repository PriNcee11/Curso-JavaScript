


try { // ejecuta esto
    var a = 100;

    // Cuidado con los errores, pues:
    //      var a = 100/0 = Infinity
    //      var a = 100/-0 = -Infinity
    //      var a = 100/-0a = NaN
    // pero no dan error.

    if (a === 100) {
        throw 'que mal';
    } else {
        throw 'oh oh!';
    }

    console.log("El valor de a:", a); // Esto no se ejecutaría

} catch (e) { // si falla

    if (e === 'que mal') {
        console.log("Error Tipo 1");
    }

    console.log(e);

} finally { // se ejecuta siempre

    console.log("finalizó");

}



/**
 * Mejor manera
 */

try {
    throw new Error('Error Tipo 1');

    console.log('Esto nunca se ejecuta');
} catch (e) {
    console.log(e); // Error: Error Tipo 1 at 04_2_manejo_errores.js: 44
    console.log(e.message); // Error Tipo 1
} finally {
    console.log('Finaliza');
}



/**
 * Cuidado con el throw,
 * si pusieras el throw fuera del try no ejecutará nada más de ese script
 * aunque si estuviera en script1.js, lo de script2.js sí se ejecutaría
 */



/**
 * 
 */


try{
    throw 1;
} catch(e){
    registroError(e);
} 

function registroError(e){
    var ahora = new Date();

    console.log("Se ha registrrado un error: ", e, "a las: ", ahora); // Se ha registrrado un error:  1 a las:  Thu Nov 23 2017 10:33:24 GMT+0100 (Hora estándar romance)
    console.log("Se ha registrrado un error: ", e, "a las: ", ahora.getTime()); // Se ha registrrado un error:  1 a las:  1511429643882
}













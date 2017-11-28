



/**
 * Toda función en JS tiene estos 3 métodos que están en su prototipo
 */

// BIND: podemos establecer el objeto y usar el this
var coche = {
    color: "Rojo",
    marca: "Renault",
    imprimir: function(){
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}

console.log(coche.imprimir()); // Renault - Rojo

var logCoche = function(arg1, arg2){
    console.log("Coche: ", this.imprimir());
    console.log("Argumentos", arg1, arg2);
    console.log("=========================================");
}

// logCoche(); // Uncaught TypeError: this.imprimir is not a function YA QUE THIS APUNTA A WINDOW

var logModeloCoche = logCoche.bind( coche );
logModeloCoche(); // Coche:  Renault - Rojo Argumentos undefined undefined
logModeloCoche("asd", "qwe"); // Coche:  Renault - Rojo Argumentos asd qwe





// CALL: podemos hacer lo mismo
logModeloCoche.call(coche, "asd", "qwe");

// APPLY
logModeloCoche.apply(coche, ["asd", "qwe"]);




// ESTO NOS SIRVE PARA LAS FUNCIONES PRESTADAS
var coche2 = {
    color: "azul",
    modelo: "seat"
}

// Con el call cambiamos el puntero hacia el objeto que pasamos
coche.imprimir.call( coche2 );















for (var i = 0; i <= 10; i++) {

    if (i == 5) {
        continue; // pasa a la siguiente iteración
    }

    console.log(i);

}


//  FOR IN muy utilizado para recorrer objetos


var Persona = function () {
    this.nombre = "Ivan";
    this.nick = "PriNcee";
    this.edad = 26;
}

var ivan = new Persona();

// Si añades un atributo al prototipo, lo recorrerá también
Persona.prototype.direccion = "valladolid";

for (const prop in ivan) {
    //console.log(prop); // nombre && edad
    console.log(prop, ": ", ivan[prop]); // nombre ivan && nick PriNcee && edad 26 && direccion valladolid

    // si no queremos que recorra las propiedades del prototipo devuelve true o false si está dentro del mismo objeto
    console.log(ivan.hasOwnProperty(prop));

    // si no queremos que salgan las del proto
    if (!ivan.hasOwnProperty(prop))
        continue;

    console.log(prop, ivan[prop]);
    // Todo esto es conocido como REFLECTION, es la habilidad que tienen los objetos de conocerse a si mismos


}


// 
for (num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    //console.log(num); // imprime del 0 al 9 porque está imprimiendo su index
}

// Si se necesita evaluar el array mejor el foreach
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function (val) {
    //console.log(val); // imprime del 1 al 10
});

// recordar que JS permite todo por lo que esto funciona:
[1, 2, 3, 4, "ivan", 6, false, function hola() { }, 9, { nombre: "yo", edad: 26 }].forEach(function (val) {
    console.log(val); // imprime del 1 al 10
});



// Rotulando los ciclos

for_principal:
for (var x = 1; x <= 5; x++) {
    console.log("x:", x);

    for_secundario:
    for (var y = 1; y <= 5; y++) {
        console.log("y:", y);

        // continue for_principal;

        for (z = 1; z <= 5; z++) {
            console.log("z:", z);

            break for_secundario;
        }
    }
}


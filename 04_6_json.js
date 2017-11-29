

function Persona() {
    this.nombre = "";
    this.edad = "";
}

Persona.prototype.imprimir = function(){
    console.log(this.nombre, this.edad);
}

var objetoJS = {
    nombre: "Ivan",
    edad: 26,
    // puede haber funciones, aunque en string sólo se evalúa lo que puede pasarse a string
    // por lo que en el JSON.stringify perdemos esa función, que no podremos recuperar en el JSON.parse
    // PROTOTYPES: si a este objeto le decimos que es del tipo persona, podemos añadir la funcion al prototipo y no la perdemos
    imprimir: function () {
        console.log(this.nombre);
    }
}
console.log("Objeto Literal", objetoJS); // Objeto Literal {nombre: "Ivan", edad: 26}


var jsonString = JSON.stringify(objetoJS);
console.log(jsonString); // {"nombre":"Ivan","edad":26}


var objetoDesdeJson = JSON.parse( jsonString );
console.log(objetoDesdeJson); // {nombre: "Ivan", edad: 26}

console.log(objetoDesdeJson.nombre); // Ivan

/**
 * Vamos a probar lo de los prototypes
 */

console.log("==============================");

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.imprimir = function () {
    console.log(this.nombre, this.edad);
}

var objetoProtoJS = new Persona("Iván", 26);
console.log(objetoProtoJS); // Persona {nombre: "Ainhoa", edad: 25}

var jsonProtoString = JSON.stringify(objetoProtoJS);
console.log(jsonProtoString); // {"nombre":"Ainhoa","edad":25}

var objetoProtoDesdeJson = JSON.parse(jsonProtoString);
console.log(objetoProtoDesdeJson); // {nombre: "Ainhoa", edad: 25}

var Persona2 = new Persona(objetoProtoDesdeJson.nombre, objetoProtoDesdeJson.edad);
console.log(Persona2);






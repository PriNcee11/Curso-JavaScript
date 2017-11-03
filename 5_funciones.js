


/*var a = 30;

function firstFunction(){
	// var a = 20;

	console.log(a);
}

firstFunction();


var a = 30; // undefined, primero hace la función, luego crea la var

var f = firstFunction(); 
console.log(f); // 30

var miFuncion = firstFunction; 
console.log(miFuncion); // devuelve la definicion sin los paréntesis de la function firstFunction(){ console.log(a) }




function imprimir(nombre, apellido){
	console.log(nombre + " " + apellido);
}

imprimir("Ivan", "Martin"); // mando una variable anónima(ya que la estoy creando en el momento de llamar a la funcion)
// variable explícita: var nombre = "juan"


imprimir("Ivan"); // Ivan undefined (reservó el espacio de memoria de apellido, por defecto es undefined) pero no falla

// Falla si: (en este caso apellido no está reservado en ningún sitio, en el window tampoco se vería)
function imprimir(nombre){
	console.log(nombre + " " + apellido);
}
//imprimir(); // Uncaught ReferenceError: apellido is not defined


function imprimir(nombre, apellido){
	apellido = apellido || "xxx"; // Si apellido tiene algo lo coge, sino "xxx"

	console.log(nombre + " " + apellido);
}
imprimir("Iván");*/


/* LAS FUNCIONES PUEDEN RECIBIR TIPOS PRIMITIVOS, OBJETOS Y FUNCIONES */

/*function imprimir(persona){
	console.log(persona);
}

imprimir({ 
	nombre: "Ivan",
	apellido: "Martin"
 });
*/

function creaFuncion(){

	return function(nombre){
		console.log("Me creó "+ nombre);

		return function(valor){
			console.log("Segunda function: "+ valor);
		}
	}

}

var nuevaFuncion = creaFuncion();

var segundaFuncion = nuevaFuncion("Iván");

segundaFuncion(11);



var persona = {
	nombre: "Maria",
	apellido: "Dubon",

	imprimirNombre: function(){
		console.log(this.nombre + " " + this.apellido);
	},

	direccion:{
		pais: "Costa Rica",
		obtenerPais: function(){
			var self = this;

			var nuevaDireccion = function(){
				console.log(self);
				console.log("La direccion es en " + self.pais);
			}

			nuevaDireccion();
		}
	}
}

persona.imprimirNombre();
persona.direccion.obtenerPais();
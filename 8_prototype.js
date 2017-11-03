



function Persona(){
	this.nombre = "Ivan";
	this.apellido = "Martin";
	this.edad = 30;

/*	this.imprimirInfo = function(){
		console.log(this.nombre + " " + this.apellido + " " + "(" + this.edad + ")");
	}*/
}

// Persona.prototype.pais = "España"; // Con variables no tiene sentido
Persona.prototype.imprimirInfo = function(){
	console.log(this.nombre + " " + this.apellido + " " + "(" + this.edad + ")");
}

/* ES ÚTIL CON UNA FUNCION YA QUE EN MEMORIA PUEDES TENER 1KK REGISTROS DE PERSONA
 * Y ESTARÍAS OPCUPANDO EN ESE 1KK DE REGISTROS LA MISMA FUNCIÓN, 
 * DE ESTA MANERA LO TIENES 1 EN EL __proto__
 */

var yo = new Persona();
console.log(yo);

var a = "Iván"; // Al hacer en consola un a. coge todos los metodos de todos string


Number.prototype.esPositivo = function(){ // ESTAMOS CREANDO UN PROTOTIPO PARA TODOS LOS NUMBER
	if(this > 0){
		return true;
	} else {
		return false;
	}
}























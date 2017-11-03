

function Persona(){
	this.nombre = "Juan";
	this.apellido = "Mendoza";
	this.edad = 30;

	this.nombreCompleto = function(){
		return this.nombre + " " + this.apellido;
	}
}

var juan = new Persona(); // sin el new los this.nombre, apellido y edad apuntan al window, con el new creas un contexto de memoria.
console.log(juan);
console.log(juan.nombreCompleto) // 	No olvidar los paréntesis !!
/* ƒ (){
		return this.nombre + " " + this.apellido;
	} */
console.log(juan.nombreCompleto()); // Juan Mendoza










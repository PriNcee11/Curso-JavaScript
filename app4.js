/* Notación de punto y corchetes */

var persona = {
	nombre: 'Iván',
	apellido: 'Martín',
	edad: 26,
	direccion: {
		calle: 'Soto',
		numero: 49,
		ciudad: 'Valladolid',
		edificio:{ // demasiada jerarquía para el punto
			nombre:'Edificio Principal',
			telefono: 987654321
		}
	}
};

/* punto: por cada nivel jerárquico es un punto */
console.log(persona.nombre);
console.log(persona.direccion);
console.log(persona.direccion.ciudad);

persona.direccion.zipcode = 47010; // se pueden añadir valores después
console.log(persona.direccion); // {calle: "Soto", numero: 49, ciudad: "Valladolid", zipcode: 47010}

console.log(persona.direccion.edificio.nombre); // muy largo...

var edificio = persona.direccion.edificio; // edificio apunta al lugar de memoria del objeto

edificio.nopiso = "8º";
console.log(persona); // var edificio apunta al objeto, por lo que al añadirle un nuevo atributo, se modifica el objeto en sí


/* corchete */
var campo = "";
console.log(persona["nombre"]); // Ivan
console.log(persona["direccion"]["ciudad"]);

var campo = "nombre";
console.log(persona[campo]); // Ivan


var today = new Date("2017/10/30");
var todayDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
var amonthless = today.getDate() + "/" + (today.getMonth()) + "/" + today.getFullYear();

console.log(todayDate);
console.log(amonthless);
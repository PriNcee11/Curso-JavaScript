var num = 10;
var str = "texto";
var bol = true;
var und = undefined;
var nul = null;

console.log(num); // 10

num = str; // a JS no le importa que sean tipos distintos. "las variables tienen escritura dinamica"
console.log(num); // texto

var obj = {
	numero: 11,
	texto: "Iván",

	objHijo: {
		numero2: 9,
		texto2: "Ainhoa"
	}
}
console.log(obj); // objetos anidados
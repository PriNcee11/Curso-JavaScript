var a = 10;
var b = a;

/* En caso de las variables, son primitivos y siempre pasan por VALOR, con distintos espacios de memoria */
console.log("a: ", a); //10
console.log("b: ", b); //10

a = 20;

console.log("a: ", a); //20
console.log("b: ", b); //10

var c = {
	nombre: "Ivan"
}

var d = c;

/* Cuando son objetos siempre, siempre se pasan por REFERENCIA y apuntan al mismo punto de memoria */
console.log("c: ", c); // {nombre: "Ivan"}
console.log("d: ", d); // {nombre: "Ivan"}

c.nombre = "Ainhoa"
console.log("c: ", c); // {nombre: "Ainhoa"}
console.log("d: ", d); // {nombre: "Ainhoa"}

d.nombre = "asdasd"
console.log("c: ", c); // {nombre: "asdasd"}
console.log("d: ", d); // {nombre: "asdasd"}
var a = 1;
var b = 'Iván';

console.log("a = " + a);
console.info("a = " + a);
console.warn("a = " + a);
console.error("a = " + a);

console.log(a+b); // number + string -> concatena

console.log(undefined === null);
console.log(undefined == null);

function imprimir(){
	for(var i=0; i<8000; i++){
		console.log("Print: "+ i);
	}
}

/* Aunque pulses el botón mientras está en la función anterior, se deposita en la pila,
 * JS no es asíncrono, hasta que no acabe lo anterior no ejecutará lo siguiente.
 */
function clickButton(){
	console.log("Click en botón");
}

imprimir();
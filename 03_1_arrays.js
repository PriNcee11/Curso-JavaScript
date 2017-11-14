


var arr = [5,4,3,2,1];
console.log(arr); // (5) [5, 4, 3, 2, 1]

arr.reverse();
console.log(arr); // (5) [1, 2, 3, 4, 5]

/* MAP PERMITE EJECUTAR UNA FUNCIÓN EN CADA ELEMENTO DEL ARRAY SIN HACER UN FOR */
arr = arr.map( function(elem){
	elem *= elem;
	return elem;
});
console.log(arr); // (5) [1, 4, 9, 16, 25]

arr = arr.map(Math.sqrt); // (5) [1, 2, 3, 4, 5]
console.log(arr);


arr = arr.join("/"); // (5) 1/2/3/4/5
console.log(arr);


arr = arr.split("/"); // (5) ["1", "2", "3", "4", "5"]
console.log(arr);

arr.push("6"); // Inserta en ultima posicion
console.log(arr); //(6) ["1", "2", "3", "4", "5", "6"]


arr.unshift("0"); // Inserta en primera posicion
console.log(arr); // (7) ["0", "1", "2", "3", "4", "5", "6"]

console.log(arr.toString()); // 0,1,2,3,4,5,6


var elimino = arr.pop(); // elimina ultima posicion
console.log(arr, elimino); // (6) ["0", "1", "2", "3", "4", "5"] "6"


arr.splice(1, 3); // En la pos 1 elimina 3 elemento
console.log(arr); // (3) ["0", "4", "5"]


arr.splice(1, 2, "10"); // En la pos 1 elimina 2 elemento y pon un "10"
console.log(arr); // (3) ["0", "4", "5"]

arr.splice(1, 2, "10", "20", "30"); // En la pos 1 elimina 2 elemento y pon un "10"
console.log(arr); // (3) ["0", "4", "5"]

arr = arr.slice(0, 2) // Corta desde 0 hasta el pos 2(sin contarlo)
console.log(arr);


var arr = [
    true,
    {
        nombre: "Ivan",
        apellido: "Martin"
    },
    function(){
        console.log("Estoy viviendo en un arreglo.");
    },
    function(persona){
        console.log( persona.nombre + " " + persona.apellido );
    },
    ["cero", "uno", "dos", "tres", "cuatro",["cinco", "seis", "siete", function(){console.log(this)}]]
];
console.log( arr ); // [true, {...}, f()]
console.log( arr[0] ); // true
console.log( arr[1].nombre + " " + arr[1].apellido ); // Ivan Martin

arr[2](); // Estoy viviendo en un arreglo.

arr[3]( arr[1] ); // Ivan Martin

console.log(arr[4][1]); // uno

console.log(arr[4][5]); // (3) ["cinco", "seis", "siete"]

console.log(arr[4][5][1]); // seis

var arr2 = arr[4][5]; // (3) ["cinco", "seis", "siete"]
arr2[1] = "ASDASDASD";
console.log(arr2); // (3) ["cinco", "ASDASDASD", "siete"]
console.log(arr);
/* ahora aunque modifiquemos el arr2, se modificará el arr ya que todos los objetos se pasan por referencia */

arr2[3](); // (4) ["cinco", "ASDASDASD", "siete", ƒ]

/* TODO ESTO ES IMPOSIBLE EN OTROS LENGUAJES, PERO JS TE LO PERMITE */
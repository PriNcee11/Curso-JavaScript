
// DENTRO DE UNA FUNCIÓN ESTÁ LA VARIABLE ESCONDIDA DEL ENTORNO GLOBAL (WINDOW)
(function(){
	var a = 10;

	function cambiarA(){
		a = 20;
	}

	cambiarA();
	console.log(a);

})();

/**/



function ejecutarFuncion(fn){
	if(fn() ===1){
		return true;
	} return false;

}

console.log(
	ejecutarFuncion(function(){
		console.log("Funcion anónima ejecutada");
		return 1; // true
		return 0; // false
	})
);































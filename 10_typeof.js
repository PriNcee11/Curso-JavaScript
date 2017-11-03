

function identifica(param){
	console.log(typeof param);
}

identifica(1);		// number
identifica("1");	// string
identifica({});		// object



function Persona(){
	this.nombre = "Juan";
	this.edad = 30;
}
var juan = new Persona();

identifica(juan);	// object
identifica( function(){} );	// function



function identifica2(param){
	if(typeof param == "function") {
		param();
	} else{
		console.log(param);
	}
}

identifica2(function(){ console.log("soy anonima"); }); // soy anonima
identifica2(2); // 2
identifica2(juan); // Persona {nombre: "Juan", edad: 30}

/* instanceof permite comparar objeto */
function identifica3(param){
	console.log(param instanceof Persona);
}
identifica3(juan); 		// true
identifica3("juan");	// false
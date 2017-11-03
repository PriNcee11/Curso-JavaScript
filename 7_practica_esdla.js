


function Player(nombre){ // con mayus para decir que es de primera clase
	this.nombre = nombre;
	this.hp = 100;
	this.sp = 100;

	this.curar = function(objetivo){
		if(this.sp >= 40){
			this.sp -= 40;
			objetivo.hp += 20;
		} else{
			console.info(this.nombre + " no tiene maná");
		}

		this.estado(objetivo);
	}

	this.shoot = function(objetivo){
		if(objetivo.hp > 40){
			objetivo.hp -= 40;
		} else{
			objetivo.hp = 0;
			console.error(objetivo.nombre + " is dead");
		}
		this.estado(objetivo);
	}

	this.estado = function(objetivo){
		console.info(this);
		console.info(objetivo);
	}
}



var gandalf = new Player("Gandalf");
var legolas = new Player("Legolas");

console.log( gandalf );
console.log( legolas );

/*
	gandalf.curar(legolas);
	legolas.shoot(gandalf);
*/











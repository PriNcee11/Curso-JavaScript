

setTimeout(function () {
    //console.log("Pasaron 2 segundos");
}, 2000);


var segundos = 0;
var intervalo = setInterval(function () {
    segundos++;

    if (segundos === 3) {
        clearInterval(intervalo); // no es this, si imprimes this apunta a window
    }

    //console.log("Live time: ", segundos);
}, 1000);

// Si inicializamos vemos que el primero, el que apunta a window, imprime estas
// mientras que con las arrow functions de ES6 funciona correctamente
var nombre = "Pedro";
var edad = 60;

var ivan = {
    nombre: "ivan",
    edad: 30,
    imprimir: function () {
        setTimeout(function () {
            console.log(this); // window
            console.log(this.nombre, this.edad); // undefined undefined
        }, 1000);
    },

    imprimirSelf: function () {

        var self = this; // aquí sí apunta al objeto

        setTimeout(function () {
            console.log(self); // window
            console.log(self.nombre, self.edad); // undefined undefined (SIN HABER INICIALIZADO AFUERA NADA)
        }, 1000);
    },

    imprimirES6: function () {
        setTimeout(() => {
            console.log(this.nombre, this.edad); // ES6 arrow function: ivan 30
        }, 1000);
    }
}

ivan.imprimir();
ivan.imprimirSelf();
ivan.imprimirES6();
















/**
 * npm install http-server -g
 * http-server -p 8081
 */


 /**
  * encontré de que aunque las funciones escape() y unescape() siguen teniendo soporte se consideran obsoletas 
  * y que se aconseja usar encodeURI() o encodeURIComponent() en su lugar.
  */


// ctrl + F5 ya que node es asíncrono, no detecta el cambio del documento al no haberlo
document.cookie = "nombre=ivan";
document.cookie = "numero=11";

var cookies = document.cookie;
console.log(cookies);


// Las cookies van separadas por punto y coma por lo que aqui cogería solo 'iv'
//document.cookie = "nombre=iv;an";


function crearCookie(nombre, valor) {
    valor = escape(valor);

    var hoy = new Date();
    hoy.setMonth( hoy.getMonth + 1 );

    document.cookie = nombre +"="+valor+";expires=" + hoy.toUTCString()+";"; // palabra reservada expires

    // chrome://settings/cookies
}

// La cookie se va a destruir cuando la fecha no sea valida
function borrarCookie( nombre ){
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth - 1);

    document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString() + ";"; // palabra reservada expires

}


function getCookie(nombre){

    var cookies = document.cookie;

    var acookies = cookies.split(";"); // (2) ["nombre=ivan", " numero=11"]

    // separamos en pares el array
    for (let i = 0; i < acookies.length; i++) {
        var e = acookies[i].split("=");
        acookies[i] = e;
    }
    // (2) ["nombre", "ivan"]
    // (2)[" numero", "11"]

    if (acookies[0] === nombre){
        return unescape(e[1]);
    }

    return undefined;
}

console.log(getCookie("nombre"));







var demo = "123;123*123'123/ 123";
console.log(demo); // 123;123*123'123/ 123
console.log(escape(demo)); // 123%3B123*123%27123/%20123

console.log(unescape(escape(demo))); // 123;123*123'123/ 123



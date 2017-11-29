

// Bloquear click derecho
documento.onmousedown = function(arg){
    if(arg.button === 2){
        alert("click derecho bloqueado");
        return;
    }

    console.log("No hay problema");
    console.log(arg);

}

// obtener lo que el usuario selecciona del texto
document.onmouseup = function(){
    var texto = window.getSelection().toString();

    console.log(texto);
}
























var i = 0;

while( i < 10 ){
    i++;

    if( i === 9 ){
        break; // acaba el bucle
    }

    if( i===5 ){
        continue; // continue salta a la siguiente iteración sin ejecutar el codigo que esté por debajo
    }

    //console.log( i );
}

// primero ejecuta una vez el código y luego evalúa
i = 0;
do{

    i++;

    if( i === 5 ){
        continue;
    }

    console.log( i );

    break;

} while( i<10 );




























function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 3000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    }, 3000);
}

console.log('Iniciando Proceso...');
hola('Eduardo', function(nombre) {
    adios(nombre, function() {
        console.log('Terminando Proceso...');
    });
});




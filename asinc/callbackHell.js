function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 3000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function conversacion(nombre,veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    }, 3000);
}

//---------------------------

console.log('Iniciando Proceso...');
hola('Eduardo', function(nombre) {
    conversacion(nombre, 5, function() {
        console.log('Teminando Proceso ...');
    });
});

/*
console.log('Iniciando Proceso...');
hola('Eduardo', function(nombre) {
    hablar(function() {
        hablar(function() {
            hablar(function() {
                adios(nombre, function() {
                    console.log('Terminando Proceso...');
                });
            });
        });
    });
});
A esto se le conoce como callback hell, es decir, un infierno de callbacks, porque puede llegar a tornarse dificil
el manejo de estos a medida que requiramos agregar mas a nuestro codigo.
*/
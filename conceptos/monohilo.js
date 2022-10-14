console.log(
    "Hola mundo desde el archivo monohilo.js"
); 

let i = 0;
setInterval(function () {
    console.log(i);
    i++;

    //if (i === 5) {
        //var a = 3 + z;
    //} --> Hay que ser siempre cuidadosos con el codigo que mandamos a ejecutar en Node
    
}, 1000);

console.log('Segunda instruccion');
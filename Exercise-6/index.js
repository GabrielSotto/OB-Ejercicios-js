// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"
function devuelveTrue() {
    return true
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function asincrona() {
    setTimeout(() => console.log("hola soy una promesa"), 5000)
}

// - Una función generadora de índices pares automáticos
function* generadora() {
    let id = 0;

    while (true) {
        id+=2;
    }
    yield id;

}
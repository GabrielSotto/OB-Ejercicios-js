// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: 'Gabriel',
    apellido: 'Sotto',
    edad: 32,
    eresDesarrollador: True
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = datosPersonales.edad

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const personales = [...datosPersonales, {nombre1: "walter", edad1: 28, nombre2: "jeremias", edad2: 30}]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const personalesOrdenados = personales.sort((a, b) => b.edad - a.edad)
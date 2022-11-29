// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompras = ["arroz", "leche", "verduras", "frutas", "carne"];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("Aceite de Girasol")

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop("Aceite de Girasol")

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let pelisFavoritas = [
    {
        titulo:"El padrino",
        director:"Francis Ford Coppola",
        fecha: new Date(1972, 8, 20)
    },
    {
        titulo:"Scarface",
        director:"Brian De Palma",
        fecha: new Date(1984, 1, 9)
    },
    {
        titulo:"La princesa Mononoke",
        director:"Hayao Miyazaki",
        fecha: new Date(1997, 6, 12)
    },
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let pelis2010 = pelisFavoritas.filter(pelis => pelis.fecha >= new Date(2010, 0, 1))

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = pelisFavoritas.map(pelis => pelis.director)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = pelisFavoritas.map(pelis => pelis.titulo)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directorPelis = directores.concat(titulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let directoresTitulos = [...directores, ...titulos]
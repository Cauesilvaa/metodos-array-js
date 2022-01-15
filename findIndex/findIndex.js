/* Essa função retorna o indice do elemento procurado */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const indiceArray = array.findIndex((valor, indice, array)=> {
    return valor === 3;
})

console.log(indiceArray);
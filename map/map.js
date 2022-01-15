/* Essa função vai pegar um array e na modificação q vc fizer
   ela vai retornar um novo array */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayMap = array.map((valor, inidice, array)=> {
    return array[2] * 2
});

console.log(`Array original: ${array}`);
console.log(`Array map: ${arrayMap}`);
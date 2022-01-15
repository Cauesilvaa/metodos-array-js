/* Essa função ser para filtrar dados de um array e retoena 
   um novo array com a condição filtrada*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newfilterArray = array.filter((valor, indice, array)=> {
   
    /* Retorna valores maior q 7
    'return' é necessario no 'filter()' pq ele atribui  os 
    valores filtrados ao 'newfilterArray'*/
    return valor > 7;
})

console.log(newfilterArray);
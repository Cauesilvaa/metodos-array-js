/* Essa função serve para encontar algum valor no array
   e se tiver retorna 'true' e se não tiver retorna 'false' */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// procurando o valor 7
const arrayIncludes = array.includes(7);

/* Procurando o valor 7 a partir do valor 3 ent
   se tivesse o valor 7 antes do valor 3 e não tivesse 
   o valor 7 depois do valor 3 retornaria 'false'*/
const arrayIncludes = array.includes(7, 3);
console.log(arrayIncludes)
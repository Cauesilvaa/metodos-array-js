/* Essa função remove elementos do array mas ele não
    modifica o array original, faz uma copia do array original 
    e remove la */

const fruits = ['Maça', 'Banana', 'Laranja', 'Uva', 'Melancia', 'Abacaxi'];

/* Passando no 'slice' o indice inicial até o indicie final 
    q eu quero excluir, ent vai excluir do indice 2 até o 5 */
const arraySlice = fruits.slice(2, 5);

console.log(fruits);
console.log(arraySlice);
/* 'find' é como o 'filter' mas ele retorna apenas o
    primeiro valor encontrado, no 'filter' retorna todos */

const pizzas = ['calabresa', 'mussarela', 'margarida', 'toscana'];

// Retorna o primeiro valor q encontrar q começa com 'm'
const findPizza = pizzas.find(valor => valor.startsWith('m'));

console.log(findPizza);

// Outro exemplo

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Retorna o primeiro valor q encontrar q é maior q 7
const findNumber = numbers.find(funcFindNumber);

function funcFindNumber (valor, indice, array) {
    return valor > 7
}

console.log(findNumber);
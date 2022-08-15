/* Sort: ordena o array em forma alfabetica crescente */
/* Reverse: ordena o array em ordem alfabetica decrescente*/

const frutas = ['Maçã', 'Banana', 'Uva', 'Laranja', 'Limão', 'Abacaxi', 'Melancia'];

// SORT
frutas.sort();
console.log(frutas);

// REVERSE
frutas.reverse();
console.log(frutas);


/*********************************************************************************************************** */
const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Zeros', value: 37 }
  ];
  
  
  const a = items.sort((value, value2)=> {
    return value.value - value2.value
  });
  
  console.log(a.reverse());

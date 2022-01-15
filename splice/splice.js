/* Essa função altera/exclui elementos do array, e a partir 
    do elemento q excluir a função pode adicionar tbm */

// APENAS EXCLUINDO
const frutas = ['Maçã', 'Banana', 'Uva', 'Laranja', 'Limão', 'Abacaxi', 'Melancia'];

/* Passando o indice '2' q é oq eu quero excluir e a quantidade '1',
pq é só ele*/
frutas.splice(2, 1)
/*const elementsRemovidos = frutas.splice(2, 1) / se der um console.log() no 'elementsRemovidos'
  vai mostrar os elementos removidos*/

console.log(frutas);

// EXCLUINDO E ADICIONANDO  

const frutas2 = ['Maçã', 'Banana', 'Uva', 'Laranja', 'Limão', 'Abacaxi', 'Melancia'];

// Adicionado 'Pera' no lugar da uva
frutas2.splice(2, 1, "Pera", 'Posso add mais q aq tbm');

console.log(frutas2)
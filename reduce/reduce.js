/* Essa função pega/passa por todos elementos do array
   e transforma em um só (mais ou menos isso) */

   const rockets = [
       {country: "Brasil", launches: 10},
       {country: "Canada", launches: 5},
       {country: "EUA", launches: 10},
       {country: "Espanha", launches: 2}
   ];

                                                //,0 iniciando o acumulador em '0'
   const totalRockets = rockets.reduce(calculete, 0);

   function calculete (acumulador, valor, indice, array) {
    return acumulador + valor.launches

    /* Aq ta acontecendo isso:
    0,
    0 + 10 = 10,
    10 + 5 = 15,
    15 + 10 = 25,
    25 + 2 = 27 */

   }

   console.log(totalRockets);
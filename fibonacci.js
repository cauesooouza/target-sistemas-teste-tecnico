/**
 *
 * @param {Number} checarNumero
 * @returns {Boolean}
 */
export const calculaSequenciaDeFibonacci = (checarNumero) => {
  const sequenciaDeFibonacci = [];
  let anterior = 0;
  let atual = 1;

  if (checarNumero < 10) {
    for (let i = 0; i < 10; i++) {
      sequenciaDeFibonacci.push(anterior);
      const fibo = anterior + atual;
      anterior = atual;
      atual = fibo;
    }
  }

  for (let i = 0; i < checarNumero; i++) {
    sequenciaDeFibonacci.push(anterior);
    const fibo = anterior + atual;
    anterior = atual;
    atual = fibo;
  }

  if (!sequenciaDeFibonacci.includes(checarNumero)) {
    console.log(`Este não numero: ${checarNumero} pertence a sequencia de fibonacci!`);
  } else {
    console.log(`Este numero: ${checarNumero} pertence a sequencia de fibonacci!`);
  }

  return sequenciaDeFibonacci.includes(checarNumero);
};
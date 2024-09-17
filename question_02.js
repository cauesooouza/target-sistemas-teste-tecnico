// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...)
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci 
// e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
import * as readline from "node:readline";

export const calculaSequenciaDeFibonacci = (checarNumero) => {
  // checa se foi inserido numero ou se não é um numero
  if (!checarNumero || typeof checarNumero !== "number") {
    // se nao for inserido ira pedir por cli
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Digite um numero valido: ", (numero) => {
      calculaSequenciaDeFibonacci(numero);
      rl.close();
    });
  } else {
    const sequenciaDeFibonacci = [0];
    let anterior = 0;
    let atual = 1;

    while (atual <= checarNumero) {
      sequenciaDeFibonacci.push(atual);
      let proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
    }

    const pertence = sequenciaDeFibonacci.includes(checarNumero);

    if (pertence) {
      console.log(
        `Este numero: ${checarNumero} pertence a sequencia de fibonacci!`
      );

    } else {
      console.log(
        `Este numero: ${checarNumero} não pertence a sequencia de fibonacci!`
      );
    }

    return { "fibonacci": sequenciaDeFibonacci, "pertence": pertence };
  }
};
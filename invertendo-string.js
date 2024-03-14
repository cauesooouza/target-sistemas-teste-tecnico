import * as readline from "node:readline";
/**
 *
 * @param {String} palavra
 * @returns {String}
 */
export const inverteOsCaracteresDeUmaPalavra = (palavra) => {
  if (!palavra) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Digite uma palavra valida: ", (string) => {
      inverteOsCaracteresDeUmaPalavra(string);
      rl.close();
    });
  } else {
    const palavraInvertidaArray = [];
    let palavraInvertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
      palavraInvertidaArray.push(palavra[i]);
    }

    for (let i = 0; i < palavraInvertidaArray.length; i++) {
      palavraInvertida += palavraInvertidaArray[i];
    }

    console.log(
      `Palavra original: ${palavra} \napós inversão ela ficou: ${palavraInvertida}`
    );

    return palavraInvertida;
  }
};
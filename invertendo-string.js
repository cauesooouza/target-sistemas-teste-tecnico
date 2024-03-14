/**
 *
 * @param {String} palavra
 * @returns {}
 */
export const inverteOsCaracteresDeUmaPalavra = (palavra) => {
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
};
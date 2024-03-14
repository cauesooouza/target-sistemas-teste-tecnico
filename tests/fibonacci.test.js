import { describe, it } from "node:test";
import assert from "node:assert";
import { calculaSequenciaDeFibonacci } from "../fibonacci.js";

describe("Deve retornar true, se o numero informado estiver na sequencia de fibonacci", () => {
  it("Teste com primeiro 38 numeros da sequencia", () => {
    const numerosDaSequencia = [
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
      4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811,
      514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352,
      24157817, 39088169,
    ];

    numerosDaSequencia.forEach((numero) => {
      const resultado = calculaSequenciaDeFibonacci(numero);
      assert.deepStrictEqual(resultado, true);
    });
  });
});

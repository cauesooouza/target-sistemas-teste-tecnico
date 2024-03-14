import { describe, it } from "node:test";
import assert from "node:assert";
import { inverteOsCaracteresDeUmaPalavra } from "../invertendo-string.js";

describe("Deve retornar uma string invertida", () => {
    it("Irei testar se esta função faz o mesmo que a função nativa reverse", () =>{
        const palavraParaTeste = "paralelepido";
        const palavraInvertidaComMinhaFuncao = inverteOsCaracteresDeUmaPalavra(palavraParaTeste);
        const palavraInvertidaComFuncaoNativa = palavraParaTeste.split("").reverse().join("");

        assert.deepStrictEqual(palavraInvertidaComFuncaoNativa, palavraInvertidaComMinhaFuncao)
    })
})
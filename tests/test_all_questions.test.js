import { describe, it } from "node:test";
import assert from "node:assert";
import { observeValor } from "../question_01.js";
import { calculaSequenciaDeFibonacci } from "../question_02.js";
import { controladoraDeFaturamento } from "../question_03.js";
import database from '../faturamento_data.json' assert {type: 'json'};
import { calculaPercentualDeRepresentacao } from "../question_04.js";
import { inverteOsCaracteresDeUmaPalavra } from "../question_05.js";

describe("Testes unitarios das 5 questões", () => {
    
    it("Questão 1: deve retornar 91", () => {
        // CASO DESEJE TESTAR OUTRO VALOR PARA QUESTÃO 1, MUDE O VALOR AQUI
        const valorTest = 91;
        const resultado = observeValor();
        assert.equal(resultado, valorTest);
    })

    // CASO DESEJE TESTAR OUTRO VALOR PRA FIBONACCI MUDE ESTE VALOR
    const valor = 55;
    it(`Questão 2: Valor informado: : ${valor} `, () => {
        const resultado = calculaSequenciaDeFibonacci(valor);

        assert.strictEqual(resultado.pertence, true, new Error(`O numero ${valor} não pertence a sequencia de fibonacci`));
    })


    it("Questão 3: Deve retornar um objeto igual ao objeto de teste ", () => {
        // CASO DESEJE ALTERAR OS DADOS DE TESTE DA QUESTÃO 3, MUDE NO JSON
        const resultado = controladoraDeFaturamento(database.faturamento_diario_agosto);
        const resultadoEsperado = {
            menor_faturamento: { dia: '07/08/2024', faturamento: 600 },
            maior_faturamento: { dia: '09/08/2024', faturamento: 2100.35 },
            media_mensal: '1338.10',
            dias_acima_da_media: 12
        }

        assert.deepStrictEqual(resultado, resultadoEsperado);
    })

    it("Questão 4: Deve receber um objeto contendo faturamento por estado e retornar o valor em porcentagem", () => {
        // CASO DESEJE ALTERAR OS DADOS DE TESTE DA QUESTÃO , MUDE DA CONSTANTE DATA
        const data = {
            'SP': 'R$67.836,43',
            'RJ': 'R$36.678,66',
            'MG': 'R$29.229,88',
            'ES': 'R$27.165,48',
            'Outros': 'R$19.849,53'
        };

        const resultado = calculaPercentualDeRepresentacao(data);
        // TAMBÉM ALTERE OS VALORES DA PORCENTAGEM DE ACORDO COM O VALOR ALTERADO ACIMA
        const resultadoEsperado = {
            SP: '37.53%',
            RJ: '20.29%',
            MG: '16.17%',
            ES: '15.03%',
            Outros: '10.98%'
        }


        assert.deepStrictEqual(resultado, resultadoEsperado);
    })

    it("Questão 5: Deve inverter uma string sem usar funções nativas", () =>{
        // CASO DESEJE ALTERAR OS DADOS DE TESTE DA QUESTÃO 5, ALTERE AQUI!
        const palavra = "contratado na target"

        const resultado = inverteOsCaracteresDeUmaPalavra(palavra);
        const resultadoEsperado = palavra.split("").reverse().join("");

        assert.deepStrictEqual(resultado, resultado);
    })
})
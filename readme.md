# Teste tecnico target sistemas

## Índice

1. [Questoes do teste](#questões-do-teste)
2. [Como utilizar o projeto?](#como-utilizar-o-projeto)

## Questões do teste

### 1 - Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);

_Q: Ao final do processamento, qual será o valor da variável SOMA?_

> R: Sera 91
> escrevi um programa realizando a solução no arquivo _"question_01.js"_

### 2 - Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

*IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*

> Resposta no arquivo _"question_02.js"_

### 3 - Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

- a) 1, 3, 5, 7, \_\_\_

  > _R: 9_
  > porque a cada numero é incrementado 2.

- b) 2, 4, 8, 16, 32, 64, \_\_\_\_

  > _R: 128_
  > Essa sequencia é o dobro do numero anterior

- c) 0, 1, 4, 9, 16, 25, 36, \_\_\_\_

  > _R: 49_
  > Essa sequencia é dada pelo quadrado dos numeros a partir do 0, e o ultimo é 7²

- d) 4, 16, 36, 64, \_\_\_\_

  > _R: 100_
  > Esse é parecido com o anterior porém só com numeros pares

- e) 1, 1, 2, 3, 5, 8, \_\_\_\_

  > _R: 13_
  > Este é o exercicio 2, sequencia de fibonacci

- f) 2,10, 12, 16, 17, 18, 19, \_\_\_\_
  > _R: 200_
  > Esta logica é que todos os numeros seja numeros que em sua escrita por extenso tenha a letra "D"

### 4 - Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

_Q: Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?_

> R: Ligaria um interruptor por vez até identificar qual interruptor é o da minha sala, sendo assim ja eliminaria um interruptor, após isto ligaria um dentro os dois interruptores que sobraram e iria ate as duas salas gastando as duas idas que posso usar, e assim conseguiria ver qual sala acendeu, e o ultimo interruptor que sobrou é da unica sala que restou

### 5 - Escreva um programa que inverta os caracteres de um string.

Resposta no arquivo _"invertendo-string.js"_

_IMPORTANTE:_

- a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
- b) Evite usar funções prontas, como, por exemplo, reverse;

## Como utilizar o projeto?

Certifique-se de ter o [node](https://nodejs.org/en/download) e o [git](https://git-scm.com/downloads) instalado no seu computador.
Abra um terminal e execute o codigo:

<code> git clone https://github.com/cauesooouza/target-sistemas-teste-tecnico.git </code>

após isto você ja tera o projeto no seu computador, para testar o projeto execute:

<code> npm run test </code>
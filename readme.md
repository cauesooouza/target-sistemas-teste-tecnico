# Teste tecnico target sistemas

## 1 - Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);

### Ao final do processamento, qual será o valor da variável SOMA?

R: Sera 91
escrevi um programa realizando a solução no arquivo *"do-while.js"*

## 2 - Escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

Dica: sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...)
F n = F n-1 + F n-2

*IMPORTANTE:* Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

Resposta no arquivo *"fibonacci.js"*

## 3 - Descubra a lógica e complete o próximo elemento:

- a) 1, 3, 5, 7, ___
R: 9
porque a cada numero é incrementado 2.

- b) 2, 4, 8, 16, 32, 64, ____
R: 128
porque a sequencia é o dobro do numero anterior

- c) 0, 1, 4, 9, 16, 25, 36, ____
R: 49
porque a sequencia é dada pelo quadrado dos numeros a partir do 0, e o ultimo é 7²

- d) 4, 16, 36, 64, ____
R: 100
esse é parecido com o anterior porém só com numeros pares

- e) 1, 1, 2, 3, 5, 8, ____
R: 13
este é o exercicio 2, sequencia de fibonacci

- f) 2,10, 12, 16, 17, 18, 19, ____
R: 200
Pelo que entendi esta logica é que todos os numeros seja numeros que em sua escrita por extenso tenha a letra "D" 


## 4 - Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

### Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

R: Ligaria um interruptor por vez até identificar qual interruptor é o da minha sala, sendo assim ja eliminaria um interruptor, após isto ligaria um dentro os dois interruptores que sobraram e iria ate as duas salas gastando as duas idas que posso usar, e assim conseguiria ver qual sala acendeu, e o ultimo interruptor que sobrou é da unica sala que restou


## 5 - Escreva um programa que inverta os caracteres de um string.

Resposta no arquivo *"invertendo-string.js"*

IMPORTANTE:
- a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
- b) Evite usar funções prontas, como, por exemplo, reverse;
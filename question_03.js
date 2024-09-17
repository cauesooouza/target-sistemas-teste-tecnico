// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

export const controladoraDeFaturamento = (data) => {
    const faturamentoValido = data.filter(obj => obj.faturamento > 0);

    const menorFaturamento = faturamentoValido.reduce((prev, curr) => {
        return (curr.faturamento < prev.faturamento) ? curr : prev;
    }, faturamentoValido[0]);

    const maiorFaturamento = faturamentoValido.reduce((prev, curr) => {
        return (curr.faturamento > prev.faturamento) ? curr : prev;
    }, faturamentoValido[0]);

    const totalFaturamento = faturamentoValido.reduce((acc, obj) => acc + obj.faturamento, 0);
    const mediaMensal = (totalFaturamento / faturamentoValido.length).toFixed(2);

    const diasAcimaDaMedia = faturamentoValido.filter(obj => obj.faturamento > mediaMensal).length;

    const controleMensal = {
        "menor_faturamento": menorFaturamento,
        "maior_faturamento": maiorFaturamento,
        "media_mensal": mediaMensal,
        "dias_acima_da_media": diasAcimaDaMedia
    };

    return controleMensal;
};
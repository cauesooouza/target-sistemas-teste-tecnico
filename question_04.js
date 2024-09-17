// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

export const calculaPercentualDeRepresentacao = (data) => {
    const valores = Object.values(data).map(valor => parseFloat(valor.replace('R$', '').replace('.', '').replace(',', '.')));
    
    const total = valores.reduce((prev, curr) => prev + curr);
    
    const valorsEmPorcentagem = valores.map((valor) => (valor / total * 100).toFixed(2) + '%');
    var index = 0;
    
    for (const estado in data) {
        data[estado] = valorsEmPorcentagem[index];
        index++;
    }
    
    return data;
}
let valor = 199.99;

function calculoParcelas(total) {
    const quantidadeMaximaDeParcelas = Math.floor(total / 10);
    const totalComJuros = total + total * quantidadeMaximaDeParcelas * 0.0199;
    const totalDasParcelasComJuros = (totalComJuros / quantidadeMaximaDeParcelas).toFixed(2);
    return `Até ${quantidadeMaximaDeParcelas}x de R$${totalDasParcelasComJuros} com juros de 1.99%am`;
}

console.log(cálculoParcelas(valor));
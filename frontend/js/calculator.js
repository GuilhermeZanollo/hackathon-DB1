// Calculator - Quantidade máx de Parcelas, com juros de 1.99 am, valor mínimo da parcela: R$ 10,00
function calculoParcelas(total) {
    const quantidadeMaximaDeParcelas = Math.floor(total / 10);
    const totalComJuros = total + (total * quantidadeMaximaDeParcelas * 0.0199);
    const valorParcela = (totalComJuros / quantidadeMaximaDeParcelas).toFixed(2);
    return {
        parcelas: quantidadeMaximaDeParcelas,
        valorParcela: parseFloat(valorParcela)
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.querySelector('.price');
    const installmentsElement = document.querySelector('.installments');

    if (priceElement) {
        const price = parseFloat(priceElement.textContent.replace('R$', '').replace(',', '.'));
        const { parcelas, valorParcela } = calculoParcelas(price);
        installmentsElement.textContent = `Até ${parcelas}x de R$${valorParcela} com juros de 1.99% am`;
    }
});
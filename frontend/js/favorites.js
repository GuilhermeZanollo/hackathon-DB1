async function favoritarProduto() {
    const response = await fetch('/favorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    });
    if (response.ok) {
        alert('Produto favoritado com sucesso');
             window.location.href = '/favorite';
    } else {
        alert('Erro ao favoritar o produto');
    }
}


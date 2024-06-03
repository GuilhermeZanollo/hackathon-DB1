document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/product');
        const products = await response.json();

        const productsContainer = document.getElementById('products-container');
        productsContainer.innerHTML = '';

        products.forEach(product => {
            const productCard = `
                <div class="card swiper-slide">
                    <div class="image-content">
                        <span class="overlay"></span>
                        <div class="card-image">
                            <img class="product-image-size" src="${product.imageUrl}" alt="${product.name}" class="card-img">
                        </div>
                    </div>
                    <div class="card-content">
                        <h2 class="name">${product.name}</h2>
                        <p class="description">R$ ${product.price.toFixed(2)}</p>
                        <button class="button"><a class="link-decoration" href="/product/${product.id}">Detalhes</a></button>
                    </div>
                </div>`;
            productsContainer.innerHTML += productCard;
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});
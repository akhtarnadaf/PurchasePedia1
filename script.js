document.getElementById('searchBtn').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchInput').value;
    
    if (searchQuery) {
        fetch(`http://localhost:5000/api/search?q=${searchQuery}`)
            .then(response => response.json())
            .then(products => {
                displayProducts(products);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});

// Function to display products dynamically
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear any previous results

    // Loop through the products and create HTML for each product card
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Source: ${product.source}</p>
        `;

        productContainer.appendChild(productCard);
    });
}

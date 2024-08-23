document.addEventListener('DOMContentLoaded', function () {
    // Array of product data with id, name, status, and image URL
    const productsData = [
        { id: 1, name: 'Handycam® CX405-camcorder', status: 'Available', image: 'images/handycam1.png' },
        { id: 2, name: 'Handycam® CX405-camcorder', status: 'Not Available', image: 'images/handycam2.png' },
        { id: 3, name: 'Camera', status: 'Available', image: 'images/camera.png' },
		{ id: 4, name: 'Tripod', status: 'Available', image: 'images/tripod.png' }
    ];

    // Function to load products into the product list
    function loadProducts() {
        const productCards = document.getElementById('productCards'); // Get the container for product cards
        productCards.innerHTML = ''; // Clear any existing content in the product container

        // Loop through the productsData array to create and append product cards
        productsData.forEach(product => {
            const card = document.createElement('div'); // Create a new div for each product card
            card.className = 'product-card'; // Assign a class name for styling
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>Status: ${product.status}</p>
                <button class="select-product-btn" data-id="${product.id}">${product.status === 'Available' ? 'Select' : 'Not Available'}</button>
            `;
            productCards.appendChild(card); // Append the created card to the product container
        });

        // Attach event listeners to the select buttons on each product card
        document.querySelectorAll('.select-product-btn').forEach(button => {
            button.addEventListener('click', function () {
                const productId = this.getAttribute('data-id'); // Get the id of the selected product
                if (this.textContent === 'Select') { // Check if the product is available for selection
                    alert('Product ID ' + productId + ' selected!'); // Show an alert with the selected product's ID
                }
            });
        });
    }

    // Event listener for the "Back to Home" button
    document.getElementById('backToHomeBtn').addEventListener('click', function () {
        window.location.href = 'client-home.html'; // Redirect to the client home page
    });

    // Event listener for the search input field
    document.getElementById('productSearch').addEventListener('input', function () {
        const searchQuery = this.value.toLowerCase(); // Get the search query and convert it to lowercase
        // Filter the products based on the search query
        const filteredProducts = productsData.filter(product => product.name.toLowerCase().includes(searchQuery));
        loadFilteredProducts(filteredProducts); // Load the filtered products
    });

    // Function to load filtered products based on the search query
    function loadFilteredProducts(filteredProducts) {
        const productCards = document.getElementById('productCards'); // Get the container for product cards
        productCards.innerHTML = ''; // Clear the product container

        // Loop through the filtered products and create product cards
        filteredProducts.forEach(product => {
            const card = document.createElement('div'); // Create a new div for each product card
            card.className = 'product-card'; // Assign a class name for styling
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>Status: ${product.status}</p>
                <button class="select-product-btn" data-id="${product.id}">${product.status === 'Available' ? 'Select' : 'Not Available'}</button>
            `;
            productCards.appendChild(card); // Append the created card to the product container
        });
    }

    // Initially load all products when the page is ready
    loadProducts();
});

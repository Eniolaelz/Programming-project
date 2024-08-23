document.addEventListener('DOMContentLoaded', function() {
    // Handle Logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirect to user login page
    });

    // Handle Products button click
    document.getElementById('viewProductsBtn').addEventListener('click', function() {
        window.location.href = 'products.html'; // Redirect to products page
    });

    // Handle Return button click
    document.getElementById('returnItemsBtn').addEventListener('click', function() {
        window.location.href = 'return.html'; // Redirect to return items page
    });

    // Handle Contact Us button click
    document.getElementById('contactSupportBtn').addEventListener('click', function() {
        window.location.href = 'contact.html'; // Redirect to contact page
    });

    // Function to load products page content dynamically
    function loadProducts() {
        const dynamicContent = document.getElementById('dynamicContent');
        dynamicContent.innerHTML = `
            <h2>Products</h2>
            <div class="product-list">
                <div class="product-card">
                    <p>Camera</p>
                    <button>Select</button>
                </div>
                <!-- Add more product cards here -->
            </div>
        `;
    }

    // Function to load return page content dynamically
    function loadReturnPage() {
        const dynamicContent = document.getElementById('dynamicContent');
        dynamicContent.innerHTML = `
            <h2>Products @ Home</h2>
            <div class="return-list">
                <div class="return-item">
                    <p>Handycam® CX405-camcorder</p>
                    <p>Reservation date: 17/04/2024</p>
                    <p>Return date: 19/04/2024</p>
                    <button>Return</button>
                </div>
                <!-- Add more return items here -->
            </div>
        `;
    }

    // Function to load contact form content dynamically
    function loadContactForm() {
        const dynamicContent = document.getElementById('dynamicContent');
        dynamicContent.innerHTML = `
            <h2>Contact Us</h2>
            <textarea placeholder="Enter your message here"></textarea>
            <button>Send</button>
        `;
    }

    // Attach event listeners to the buttons for dynamic content
    document.getElementById('viewProductsBtn').addEventListener('click', loadProducts);
    document.getElementById('returnItemsBtn').addEventListener('click', loadReturnPage);
    document.getElementById('contactSupportBtn').addEventListener('click', loadContactForm);
});

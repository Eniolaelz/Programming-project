document.addEventListener('DOMContentLoaded', function () {
    // Array containing return items data with id, name, reservation date, and return date
    const returnItemsData = [
        { id: 1, name: 'Handycam® CX405-camcorder', reservationDate: '17/04/2024', returnDate: '19/04/2024' },
        { id: 2, name: 'Handycam® CX405-camcorder', reservationDate: '17/04/2024', returnDate: '19/04/2024' },
        { id: 3, name: 'Handycam® CX405-camcorder', reservationDate: '17/04/2024', returnDate: '19/04/2024' }
    ];

    // Function to load return items into the return items list
    function loadReturnItems() {
        const returnItems = document.getElementById('returnItems'); // Get the container for return items
        returnItems.innerHTML = ''; // Clear any existing content in the return items container

        // Loop through the returnItemsData array to create and append return item cards
        returnItemsData.forEach(item => {
            const card = document.createElement('div'); // Create a new div for each return item card
            card.className = 'return-item-card'; // Assign a class name for styling
            card.innerHTML = `
                <p>${item.name}</p>
                <p>Reservation date: ${item.reservationDate}</p>
                <p>Return date: ${item.returnDate}</p>
                <button class="return-item-btn" data-id="${item.id}">Return</button>
            `;
            returnItems.appendChild(card); // Append the created card to the return items container
        });

        // Attach event listeners to the return buttons on each return item card
        document.querySelectorAll('.return-item-btn').forEach(button => {
            button.addEventListener('click', function () {
                const itemId = this.getAttribute('data-id'); // Get the id of the selected return item
                alert('Return initiated for Product ID ' + itemId); // Show an alert with the selected item's ID
            });
        });
    }

    // Event listener for the "Back to Home" button
    document.getElementById('backToHomeBtn').addEventListener('click', function () {
        window.location.href = 'client-home.html'; // Redirect to the client home page
    });

    // Initially load all return items when the page is ready
    loadReturnItems();
});

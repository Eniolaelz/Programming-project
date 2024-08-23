document.addEventListener('DOMContentLoaded', function() {
   // User Dashboard Scripts
   document.getElementById('logoutBtn').addEventListener('click', function() {
       window.location.href = "index.html"; // Redirect to user login
   });

   // Admin Dashboard Scripts
   document.getElementById('logoutBtn').addEventListener('click', function() {
       window.location.href = "admin.html"; // Redirect to admin login
   });

   // Sample reservations data
   const adminReservations = [
       { id: 1, product: 'Camera', user: 'John Doe', date: '2024-08-19' },
       { id: 2, product: 'Tripod', user: 'Jane Smith', date: '2024-08-20' },
   ];

   // Sample users data
   const users = [
       { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
       { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Banned' },
       { id: 3, name: 'Stephanie', email: 'stephanie@test.com', status: 'Active' },
   ];

   // Sample products data with images
   const productsData = [
       { id: 1, name: 'Camera', status: 'Available', image: 'images/camera1.png' },
       { id: 2, name: 'Tripod', status: 'Available', image: 'images/tripod.png' },
       { id: 3, name: 'Lighting Kit', status: 'Available', image: 'images/lighting-kit.png' },
   ];

   // Function to load reservations into the table
   function loadAdminReservations() {
       const reservationList = document.getElementById('reservationList');
       reservationList.innerHTML = '';
       adminReservations.forEach(reservation => {
           const tr = document.createElement('tr');
           tr.innerHTML = `
               <td>${reservation.id}</td>
               <td>${reservation.product}</td>
               <td>${reservation.user}</td>
               <td>${reservation.date}</td>
               <td>
                   <button class="more-info-btn" data-id="${reservation.id}">More information</button>
               </td>
           `;
           reservationList.appendChild(tr);
       });

       // Attach event listeners to "More information" buttons
       document.querySelectorAll('.more-info-btn').forEach(button => {
           button.addEventListener('click', function() {
               const reservationId = this.getAttribute('data-id');
               viewReservation(parseInt(reservationId));
           });
       });
   }

   function viewReservation(id) {
       const reservation = adminReservations.find(r => r.id === id);
       if (reservation) {
           // Update the reservation details in the DOM
           document.querySelector('.reservation-info').innerHTML = `
               <p>Reservation nr: ${id}</p>
               <p>Product ID: ${reservation.product}</p>
               <p>User: ${reservation.user}</p>
               <p>Date: ${reservation.date}</p>
               <img src="${reservation.product.toLowerCase()}.png" alt="${reservation.product}">
           `;
           
           // Display the reservation detail section
           document.querySelector('.reservation-detail').style.display = 'block';

           // Attach event listeners for Accept and Decline buttons
           const acceptButton = document.querySelector('.accept-btn');
           const declineButton = document.querySelector('.decline-btn');

           if (acceptButton && declineButton) {
               acceptButton.addEventListener('click', function() {
                   acceptReservation(id);
               });
               declineButton.addEventListener('click', function() {
                   declineReservation(id);
               });
           } else {
               console.error('Accept or Decline button not found');
           }
       }
   }

   // Function to handle accept action
   function acceptReservation(id) {
       alert('Reservation accepted: ' + id);
       document.querySelector('.all-done-page').style.display = 'block';
       document.querySelector('.reservation-detail').style.display = 'none';
   }

   // Function to handle decline action
   function declineReservation(id) {
       alert('Reservation declined: ' + id);
       document.querySelector('.declined-page').style.display = 'block';
       document.querySelector('.reservation-detail').style.display = 'none';
   }

   // Function to load users into the table
   function loadUsers() {
       const userList = document.getElementById('userList');
       userList.innerHTML = '';
       users.forEach(user => {
           const tr = document.createElement('tr');
           tr.innerHTML = `
               <td>${user.id}</td>
               <td>${user.name}</td>
               <td>${user.email}</td>
               <td>${user.status}</td>
               <td>
                   <button class="edit-user-btn" data-id="${user.id}">Edit</button>
                   <button class="toggle-status-btn" data-id="${user.id}">${user.status === 'Active' ? 'Ban' : 'Unban'}</button>
               </td>
           `;
           userList.appendChild(tr);
       });

       // Attach event listeners to the edit buttons
       document.querySelectorAll('.edit-user-btn').forEach(button => {
           button.addEventListener('click', function() {
               const userId = this.getAttribute('data-id');
               editUser(parseInt(userId));
           });
       });

       // Attach event listeners to the toggle status buttons
       document.querySelectorAll('.toggle-status-btn').forEach(button => {
           button.addEventListener('click', function() {
               const userId = this.getAttribute('data-id');
               toggleUserStatus(parseInt(userId));
           });
       });
   }

   // Function to toggle user status
   function toggleUserStatus(id) {
       const user = users.find(user => user.id === id);
       if (user) {
           user.status = user.status === 'Active' ? 'Banned' : 'Active';
           loadUsers(); // Reload the users to reflect the change
       }
   }

   // Function to edit a user (placeholder)
   function editUser(id) {
       alert('Edit user with ID ' + id);
   }

   // Function to load products into the table
   function loadAdminProducts(filteredProducts = productsData) {
       const productList = document.getElementById('productList');
       productList.innerHTML = '';
       filteredProducts.forEach(product => {
           const tr = document.createElement('tr');
           tr.innerHTML = `
               <td>${product.id}</td>
               <td><img src="${product.image}" alt="${product.name}"></td>
               <td>${product.status}</td>
               <td>
                   <button class="info-btn" data-id="${product.id}"><img src="images/info-icon.png" alt="Info"></button>
               </td>
           `;
           productList.appendChild(tr);
       });

       // Attach event listeners to "Info" buttons
       document.querySelectorAll('.info-btn').forEach(button => {
           button.addEventListener('click', function() {
               const productId = this.getAttribute('data-id');
               viewProductInfo(parseInt(productId));
           });
       });
   }

   // Function to view product info
   function viewProductInfo(id) {
       const product = productsData.find(p => p.id === id);
       if (product) {
           alert(`Viewing info for Product ID: ${product.id}\nName: ${product.name}\nStatus: ${product.status}`);
       } else {
           alert('Product not found!');
       }
   }

   // Function to add a new product
   function addNewProduct() {
       const id = document.getElementById('newProductId').value;
       const name = document.getElementById('newProductName').value;
       const image = document.getElementById('newProductImage').value;
       const status = document.getElementById('newProductStatus').value;

       const newProduct = {
           id: id,
           name: name,
           image: image,
           status: status
       };

       productsData.push(newProduct);
       loadAdminProducts();

       document.getElementById('newProductId').value = '';
       document.getElementById('newProductName').value = '';
       document.getElementById('newProductImage').value = '';
       document.getElementById('newProductStatus').value = 'Available';

       document.getElementById('addProductForm').style.display = 'none';
   }

   // Event listener to show the form when the "Add New Product" button is clicked
   document.getElementById('addProductBtn').addEventListener('click', function() {
       document.getElementById('addProductForm').style.display = 'block';
   });

   // Event listener to save the new product
   document.getElementById('saveProductBtn').addEventListener('click', function() {
       addNewProduct();
   });

   // Function to search products
   function searchProducts() {
       const searchQuery = document.getElementById('productSearch').value.toLowerCase();
       const filteredProducts = productsData.filter(product => 
           product.name.toLowerCase().includes(searchQuery)
       );
       loadAdminProducts(filteredProducts);
   }

   // Event listener to trigger the search functionality
   document.getElementById('searchBtn').addEventListener('click', searchProducts);

   // Also trigger search when typing in the search box
   document.getElementById('productSearch').addEventListener('input', searchProducts);

   // Toggling sections
   document.getElementById('toggleReservationsBtn').addEventListener('click', function() {
       const reservationsSection = document.getElementById('reservationsSection');
       reservationsSection.style.display = reservationsSection.style.display === 'none' || reservationsSection.style.display === '' ? 'block' : 'none';
   });

   document.getElementById('toggleUsersBtn').addEventListener('click', function() {
       const usersSection = document.getElementById('usersSection');
       usersSection.style.display = usersSection.style.display === 'none' || usersSection.style.display === '' ? 'block' : 'none';
   });

   document.getElementById('toggleProductsBtn').addEventListener('click', function() {
       const productsSection = document.getElementById('productsSection');
       productsSection.style.display = productsSection.style.display === 'none' || productsSection.style.display === '' ? 'block' : 'none';
   });

   // Load initial data when the page loads
   if (document.getElementById('reservationList')) {
       loadAdminReservations();
   }

   if (document.getElementById('userList')) {
       loadUsers();
   }

   if (document.getElementById('productList')) {
       loadAdminProducts();
   }
});

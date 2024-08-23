document.addEventListener('DOMContentLoaded', function() {
    // Handle admin login form submission
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Check if the credentials match
            if (email === 'stephanieeniola@gmail.com' && password === 'test') {
                // Redirect to the admin dashboard if credentials are correct
                window.location.href = 'admin-dashboard.html';
            } else {
                // Show an error message if credentials are incorrect
                alert('Incorrect Email/Password');
                const errorMessage = document.getElementById('error-message');
                if (errorMessage) {
                    errorMessage.style.display = 'block';
                }
            }
        });
    }

    
});

document.addEventListener('DOMContentLoaded', function() {
    // Handle user login form submission
    const loginForm = document.getElementById('userLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Check if the credentials match
            if (email === 'stephanieeniola@gmail.com' && password === 'test') {
                // Redirect to the user dashboard if credentials are correct
                window.location.href = 'client-home.html';
            } else {
                // Show an error message if credentials are incorrect
                alert('Incorrect Email/Password');
            }
        });
    }
	document.getElementById('goToAdminBtn').addEventListener('click', function() {
        window.location.href = 'admin.html';
    });
});
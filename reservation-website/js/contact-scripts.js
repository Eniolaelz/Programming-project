document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the "Send Message" button
    document.getElementById('sendMessageBtn').addEventListener('click', function () {
        const message = document.getElementById('message').value; // Get the value of the message input field

        // Check if the message is not empty after trimming whitespace
        if (message.trim() !== '') {
            alert('Message sent: ' + message); // Show an alert with the entered message
            document.getElementById('message').value = ''; // Clear the message input field after sending
        } else {
            // Show an alert if the message field is empty
            alert('Please enter a message before sending.');
        }
    });

    // Event listener for the "Back to Home" button
    document.getElementById('backToHomeBtn').addEventListener('click', function () {
        window.location.href = 'client-home.html'; // Redirect to the client home page
    });
});

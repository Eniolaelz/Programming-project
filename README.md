# Programming-project
Project Name: Reservations Website
Description:
This project is a website created as an individual assignment for the Programming Project course.
The website is based on the prototype developed during the group project in the first session.
It includes an Admin Panel for managing users, products, and reservations, as well as a Client Panel
for users to dynamically view products, return items, and contact support.

Features
Admin Panel:
Login functionality with predefined credentials.
Manage Users: Add, edit, ban/unban users.
Manage Reservations: View, accept, or decline reservations. /*not fully functional as initially, the event listeners
for the accept and decline buttons were being attached multiple times due to the way the viewReservation function 
was structured. Each time the function was called, new event listeners were being added, leading to unexpected
behavior where multiple alerts would trigger, or the button might not work as intended.*/

Manage Products: Add, edit, and view product information.


Client Panel:

Login functionality with predefined credentials.
View Products: Display products in a list.
Return Items: Allows users to return borrowed items.
Contact Support: Provides a form to contact support.
Switch between User and Admin login screens.


Technologies Used:
HTML5: For structuring the content on the web pages.
CSS3: For styling the web pages and ensuring responsive design.
JavaScript: For adding interactivity and dynamic elements to the website.

How to Run the Project
open the index.html file in your preferred web browser.
No server setup is required.
Credentials
Admin Login:
Email: stephanieeniola@gmail.com
Password: test
User Login:
Email: stephanieeniola@gmail.com
Password: test
Justifications for Changes
Login Switching: Added buttons to switch between Admin and User login screens for ease of use.
Dynamic Interactions: Implemented various JavaScript functionalities to meet the requirement for 
dynamic elements without backend integration.

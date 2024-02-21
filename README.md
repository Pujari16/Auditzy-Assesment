# Auditzy-Assesment
React application for auditzy



This React application is designed to serve as a dashboard with features including Google login, displaying user details, CRUD operations on products from the Fake Store API, sorting functionality, and Material UI based design. Below are the steps to set up and run the application:

1. Installation

Ensure you have Node.js and npm installed on your machine.

Use the package manager npm to install the required dependencies.

npm install firebase @mui/icons-material @mui/material @emotion/styled @emotion/react react-router-dom react-bootstrap bootstrap axios

2. Usage

Clone this repository to your local machine or download the source code as a ZIP file and extract it.

Navigate to the project directory in your terminal.

cd react-dashboard-app

Set up Firebase for authentication:

Go to the Firebase Console (https://console.firebase.google.com/).
Create a new project or use an existing one.
Enable Google authentication in the Authentication section.
Copy your Firebase project configuration (apiKey, authDomain, projectId, etc.) and paste it into src/firebase.js.

Configure Fake Store API:

Refer to the Fake Store API documentation (https://fakestoreapi.com/docs) for details on how to interact with the API.
Ensure you understand how to perform CRUD operations and sorting using the API.
You may need to generate an API token or use the provided endpoints directly.

Run the application:

npm start

The application will be running at http://localhost:3000 by default.

3. Features

Google Login: Users can authenticate using their Google accounts.
Dashboard: Displays user details such as email and name, along with the total number of products added.
CRUD Operations: Perform Create, Read, Update, and Delete operations on products fetched from the Fake Store API.
Sorting: Sort the data according to the sorting API provided by Fake Store API.
Material UI Design: The UI is designed using Material UI components.
Loader: A loader is displayed while data is being fetched, especially during CRUD operations.
No Data Available: If there is no data available, a message indicating "No Data Available" will be displayed.

4. Folder Structure

react-dashboard-app/
│
├── public/
│ ├── index.html
│ └── ...
│
└── src/
├── components/
│ ├── Dashboard.js
│ ├── Login.js
│ ├── ProductList.js
│ └── ...
│
├── firebase.js
├── App.js
├── index.js
└── ...

5. Contributors

- Pujari Nikitha

6. License

This project is licensed under the MIT License.


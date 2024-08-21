Contact Management API
This project is a simple Contact Management API built with Node.js, Express, and MongoDB. The API allows users to create, retrieve, update, and delete contacts. It also includes authentication features such as user registration, login, and logout.

Features
User Authentication: Users can register, log in, and log out. Authentication is handled using JSON Web Tokens (JWT).
Contact Management:
Create a new contact.
Retrieve a list of all contacts.
Retrieve a single contact by ID.
Update an existing contact.
Delete a contact.
Validation: Data validation is implemented to ensure correct data formats before saving to the database.
Security: The API is secured using JWT for protected routes.

Technologies Used
Node.js: JavaScript runtime.
Express: Web framework for Node.js.
MongoDB: NoSQL database.
Mongoose: ODM library for MongoDB.
JWT: JSON Web Tokens for authentication.
dotenv: Environment variable management.
Jest: Testing framework.

Installation
Prerequisites
Node.js (version 14.x or later)
MongoDB (local or cloud-based)

Steps

Clone the repository:

git clone https://github.com/ABIKEM01/hux-assessment-backend.git
cd hux-assessment-backend
Install dependencies:

npm install
Set up environment variables:

Create a .env file in the root of the project with the following variables:
MONGO_URI = 'mongodb+srv://Abikem01:Abikem01Abikem01@cluster0.kzbzior.mongodb.net/hux?retryWrites=true&w=majority'
PORT =5000
JWT_SECRET = "SECRET_12345"

Start the server:
npm run dev or npm start
The server will run on http://localhost:5000.

API Endpoints
Authentication
POST /api/auth/register: Register a new user.
Request Body: { "email": "string", "password": "string" }
POST /api/auth/login: Log in a user.
Request Body: { "email": "string", "password": "string" }
POST /api/auth/logout: Log out a user.
Contacts
POST /api/contacts: Create a new contact.
Protected Route: Requires JWT.
Request Body: { "firstName": "string", "lastName": "string", "phoneNumber": "string" }
GET /api/contacts: Get all contacts.
Protected Route: Requires JWT.
GET /api/contacts/:id: Get a single contact by ID.
Protected Route: Requires JWT.
PUT /api/contacts/:id: Update a contact by ID.
Protected Route: Requires JWT.
Request Body: { "firstName": "string", "lastName": "string", "phoneNumber": "string" }
DELETE /api/contacts/:id: Delete a contact by ID.
Protected Route: Requires JWT.

Running Tests
This project includes unit tests for the Create and Update contact API endpoints using Jest.

To run the tests:


npm test
Folder Structure
plaintext
Copy code
├── controllers
│   ├── authController.js
│   └── contactController.js
├── middlewares
│   └── authMiddleware.js
├── models
│   ├── Contact.js
│   └── User.js
├── routes
│   ├── authRoutes.js
│   └── contactRoutes.js
├── tests
│   └── contact.test.js
├── .env
├── app.js
├── package.json
└── README.md
Contributing
If you want to contribute to this project, please fork the repository and create a pull request.

License
This project is licensed under the MIT License.


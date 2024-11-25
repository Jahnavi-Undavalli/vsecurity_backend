**Role-Based Access Control (RBAC) System**
**Project Overview**
This project implements a Role-Based Access Control (RBAC) system that manages user authentication and authorization based on roles. It ensures that users can securely register, log in, and access resources according to their roles. The system uses JWT (JSON Web Tokens) for session management and enforces role-based permissions.

The project demonstrates core concepts of security including authentication, authorization, and role-based access control in modern web applications.

**Features**

User Authentication:
    Secure registration with password hashing (using bcrypt).
    User login that generates a JWT token for session management.
    User logout endpoint to invalidate the session.
Authorization Based on Roles:
    Users are assigned roles such as Admin, Moderator, and User.
    Access to specific routes is restricted based on the user's role.
    Only authorized users with the correct role can access or perform actions on certain resources.
RBAC Implementation:
    Admins can manage roles and assign roles to users.
    Moderators and Users have restricted access based on their assigned permissions.
Security Best Practices:
    Passwords are hashed and stored securely using bcrypt.
    JWTs are used for secure, token-based authentication.
    Middleware checks ensure that only authenticated users with proper roles can access restricted resources.
    
Technologies Used
**Backend**: Node.js, Express.js
**Database**: MongoDB
**Authentication**: JSON Web Tokens (JWT)
**Password Hashing**: bcrypt.js
**Environment Variables**: dotenv
**Middleware**: Custom middleware for authentication (protect) and authorization (authorizeRoles)

Project Setup
1. Clone the Repository
git clone https://github.com/your-username/rbac-system.git
cd rbac-system
2. Install Dependencies
Make sure you have Node.js installed. Then, install the necessary dependencies:
npm install
3. Configure Environment Variables
Create a .env file in the root directory and configure your environment variables:

env code

PORT=5000
MONGO_URI=mongodb+srv://undavallijahnavi354:Oz57Wr6NYa3NlYth@cluster0.ce229.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your_jwt_secret
JWT_EXPIRES=1h
USERNAME=undavallijahnavi354
password=Oz57Wr6NYa3NlYth

4. Run the Application
npm start
The application will be running on http://localhost:5000.

**API Endpoints**
  **Authentication Routes**

**Register User**
Endpoint: POST /api/auth/register
Description: Register a new user with a username, email, and password.
Request Body:
json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "User"
}
**Login**
Endpoint: POST /api/auth/login
Description: Login and receive a JWT token.
Request Body:
json

{
  "email": "john@example.com",
  "password": "password123"
}
**Logout**
Endpoint: POST /api/auth/logout
Description: Logout and invalidate the session.

**User Management Routes**
**Get All Users**
Endpoint: GET /api/users
Description: Get all users (Admin only).
Headers: Authorization: Bearer <token>

**Update User Role**
Endpoint: PUT /api/users/:id/role
Description: Update the role of an existing user (Admin only).
Request Body:
json

{
  "role": "Moderator"
}
Role Management Routes
Create Role

**Endpoint: POST /api/roles**
Description: Create a new role (Admin only).
Request Body:
json

{
  "name": "Manager",
  "permissions": ["create", "read", "update"]
}
**Get All Roles**
Endpoint: GET /api/roles
Description: Get a list of all roles.

**Role-Based Access Control (RBAC) Implementation**
The system defines the following roles:

**Admin**: Full access to all routes and the ability to manage users and roles.
**Moderator**: Restricted access to specific endpoints, like viewing roles and managing content.
**User**: Limited access, typically used for regular users of the application.

**Middleware:**
protect middleware: Verifies the JWT token to authenticate the user.
authorizeRoles middleware: Restricts access to routes based on the user's role.
Testing the API
You can test the API using tools like Postman. Here's how to test the authentication and role-based functionality:

1. Register a User
Send a POST request to /api/auth/register to register a new user.
2. Login
Send a POST request to /api/auth/login to log in and receive a JWT token.
3. Protect Routes
Use the JWT token in the Authorization header as Bearer <token> for protected routes like /api/users, /api/roles, and /api/users/:id/role.
4. Test Role-Based Access
**Admin**: Can create roles, update user roles, and access all endpoints.
**Moderator**: Can view roles and perform certain actions but has limited access.
**User**: Can only access personal data and cannot access sensitive routes.

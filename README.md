# Express.js API with JWT Login

A simple REST API built with Node.js, Express.js and JSON Web Token, using a proper
routes / controllers / middleware folder structure.

## Folder Structure

```
express-jwt-api/
├── config/
│   └── config.js              # Port, JWT secret, demo user
├── controllers/
│   ├── homeController.js
│   ├── aboutController.js
│   ├── contactController.js
│   ├── servicesController.js
│   └── loginController.js
├── middleware/
│   └── authMiddleware.js      # Optional: verify JWT on protected routes
├── routes/
│   └── index.js               # All routes mapped to controllers
├── .env.example
├── .gitignore
├── package.json
└── server.js                  # Entry point (Port 5000)
```

## Setup

```bash
# 1. Install dependencies
npm install

# 2. (Optional) create your .env file
cp .env.example .env

# 3. Start the server
npm start
```

Server runs at: `http://localhost:5000`

## API Endpoints

| Method | Endpoint    | Description                 |
| ------ | ----------- | --------------------------- |
| GET    | `/`         | Welcome message             |
| GET    | `/about`    | About info                  |
| GET    | `/contact`  | Contact info                |
| GET    | `/services` | List of services            |
| POST   | `/login`    | Login and receive JWT token |

### GET /

```json
{ "success": true, "message": "Welcome to Express.js API" }
```

### GET /about

```json
{ "success": true, "message": "This is the About API" }
```

### GET /contact

```json
{
  "success": true,
  "email": "support@example.com",
  "phone": "+8801700000000"
}
```

### GET /services

```json
{
  "success": true,
  "services": ["Web Development", "Mobile App Development", "UI/UX Design"]
}
```

### POST /login

Request body:

```json
{ "email": "student@example.com", "password": "123456" }
```

Success response (200):

```json
{
  "success": true,
  "message": "Login Successful",
  "token": "YOUR_JWT_TOKEN"
}
```

Failure response (401):

```json
{ "success": false, "message": "Invalid Email or Password" }
```

## Testing with cURL

```bash
curl http://localhost:5000/
curl http://localhost:5000/about
curl http://localhost:5000/contact
curl http://localhost:5000/services

curl -X POST http://localhost:5000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"student@example.com","password":"123456"}'
```

## Optional: Protecting a Route

The `middleware/authMiddleware.js` file verifies a token sent as
`Authorization: Bearer <token>`. Use it like this:

```js
const verifyToken = require("../middleware/authMiddleware");

router.get("/profile", verifyToken, profileController.profile);
```

# SS-BACKEND-TASK-Saqib

## Project Run Instructions

### Run the Project with Docker

If you want to run the project with Docker, please follow these steps:

1. Create a `.env` file and set the following environment variables:
   - PORT
   - DB_NAME
   - JWT_SECRET

2. Run the following command from the directory where the `docker-compose.yml` file exists to run the project in a Docker container: `> docker-compose up`

### Run the Project without Docker

To run the project without Docker, follow these steps:

1. Create a `.env` file and set the following variables:
- PORT
- MONGO_URL
- DB_NAME
- JWT_SECRET

2. Run the following commands sequentially from the root directory of the project: 
`> npm install` and 
`> npm run dev`

- Use `npm start` instead of `npm run dev` to run without the development environment.

**Note:** If you are running the project locally, you can use the following command to populate the database with dummy data after setting the environment variables in the `.env` file:
`> npm run data:import`

You will then be able to see some data in your database.

## Project Details and Implementation

### Models

- User model
  - name - String
  - email - String
  - password - String
  - isAdmin - Boolean

- Movies_TvShows model
  - title - String
  - runtime - String
  - type - String
  - genre - String
  - actors - Array
  - producers - Array
  - directors - Array

### Endpoints

- Users - `/api/users`
  1. `'/'` - Get all users (This route is protected, only admin can access it).
  2. `'/byId/:id'` - Get user details (Only admin can access user details).
  3. `'/register'` - User registration.
  4. `'/login'` - User login.

- Movies/TV Shows - `/api/movies-and-tv-shows`
  1. `'/'` - Get all movies and TV shows (Accessible for all, including registered and non-registered users).
  2. `'/byId/:id'` - Get movie/TV show details (Accessible for all).
  3. `'/add-new'` - Register a new movie/TV show (Only available for logged in/registered users).

### Security/Authentication & Custom Error Handling

- Authentication and authorization are implemented using JSON Web Token (JWT) with cookie-based authentication.
- Custom error handling middleware is implemented for error handling.

# MarkkinaPaikka

> Full stack marketplace app where users can list items to sell.

**Currently live at https://markkinapaikka.onrender.com/**

## Summary

- The application is created with [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript) and consists of a [Vite](https://vitejs.dev/)/[React](https://react.dev/) frontend, a [Node](https://nodejs.org/en) backend with an [Express](https://expressjs.com/) API and a mySQL database hosted in Freedb.

## Client

- The client runs a [Vite](https://vitejs.dev/)/[React](https://react.dev/) frontend, that runs a web based market place.


### Client setup

1. [Node](https://nodejs.org/en) 20.x is required
2. Run `npm install` on `/client` directory
3. These scripts can now be run:
  - `npm run dev` to start standalone dev server with [hot reload](https://stackoverflow.com/a/43246550/23066817).
  - `npm run build` to bundle client. This is **required** if you want the server to serve the client files.
  - `npm run lint` to run [Eslint](https://eslint.org/) for checking code formatting and style.


## Server

- The server is created with [Node](https://nodejs.org/en) and runs an [Express](https://expressjs.com/) server with [CRUD](https://www.freecodecamp.org/news/crud-operations-explained/) endpoints for storing items and handling user credentials.


### Server setup

For running the application without any additional setup using Docker, see: [Development with Docker](#development-with-docker).

1. [Node](https://nodejs.org/en) 20.x is required
2. Run `npm install` in `/server` directory
3. Setup the environment in `.env` file, you only need to setup JTW_KEY secret
5. These scripts can now be run:
  - `npm start` for running server in production mode
  - `npm run dev` for running server in development mode ([hot reload](https://stackoverflow.com/a/43246550/))
  - `npm run lint` to run [Eslint](https://eslint.org/) for checking code formatting and style.


### API Documentation

### Endpoints:


### ---- ITEMS ----

GET /api/items

GET /api/items/id

POST /api/items

PUT /api/items/id

DELETE  /api/items/id

GET /api/users/id

POST /api/users/signup

POST /api/users/login

## CI/CD

- Development of this project is automated using [GitHub Actions](https://docs.github.com/en/actions).
- The `main` branch is protected and pushes to it can only be done through [pull-requests](https://docs.github.com/en/pull-requests) that need to pass the automated branch verification.
- The CI pipeline runs when pushes are made to the repository. First job is branch verification, where both server and client are run with linter and tests. Second job is to deploy and publish image.

## ToDo list
- filter by category functionality
- favorite item functionality
- update item functionality
- client tests
- e2e tests
- mock db on server tests
- upload image from device
- data validation
- error handling improvements

## Project summary

Server and client creation was smooth. I used a lot of time in pure css, i should look into css libraries for future projects. In the end i faced few problems with deployment, with signin up and logging in. I started the project too late, and ended up not meeting all the requirements, which are for the future.

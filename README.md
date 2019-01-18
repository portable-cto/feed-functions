# Feed Functions

A collection of functions that I deploy to manipulate data feeds. Uses:

- Node 10
- Express.js
- Nodemon for Development
- Docker

## Local Setup

1. Clone repository

`git clone https://github.com/gmoralesc/node-basic-boilerplate-docker`

2. Go to the project folder and up the enviroment

`cd node-basic-boilerplate-docker`
`docker-compose up`

The app will run in development mode and Nodemon will looking for changes in the directory and restart the app

3. If you want to run command inside the container

In a new terminal session:

A. Identify the name of the container:

`docker container ls`

B. Run the command:

`docker exec [name] npm test`

Another example:

`docker exec [name] npm install eslint --global`

(The last argument is the command)

## Endpoints

Coming soon

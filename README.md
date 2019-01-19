# Feed Functions

A collection of Node endpoints that I deploy to manipulate data feeds.


## Local Setup

- Clone this repo
- Install dependencies: `npm i`
- Run the dev server: `npm run dev`


## Endpoints

Coming soon


## Testing & Linting

- Run tests: `npm test`
- Run prettier: `npm run prettier`


## Manually Deploying

- Build the Docker image: `docker build -t karllhughes/feed-functions`
- Push to Docker Hub: `docker push karllhughes/feed-functions`
- Pull and run the container: `docker run -p 3000:3000 -v $(pwd):/usr/src/app -d --rm --name feed-functions karllhughes/feed-functions`

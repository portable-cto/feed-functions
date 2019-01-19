FROM node:10

WORKDIR /usr/src/app

RUN mkdir src
COPY src/ ./src
COPY tests/ ./tests
COPY package.json .
COPY package-lock.json .
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]

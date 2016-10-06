# react-newsfeed

This is an example code implementing a very simple client server react-app
- with just react
- with react and flux

## FeedServer

- A simple HTTPServer @ http://localhost:3001/
- Run `node server.js`
- Then type in any inputs - every line is a newsfeed

## With Just React

- Install deps => `npm install`
- Run tests => `npm test`
- Tests written using jest framework & React components tested using react-test-utils
- Generate app.js => Run `npm start`
- Open "file:///<PROJECT_FOLDER>/no-flux/app/index.html
- The feed from server should start appearing

## With React + Flux

- Install deps => `npm install`
- Run tests => `npm test`
- Tests written using jasmine & React components tested using react-test-utils enzyme
- Generate app.js => Run `npm start`
- Open "file:///<PROJECT_FOLDER>/with-flux/app/index.html
- The feed from server should start appearing
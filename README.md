# Intro

Just playing around with Twitter API and Redis. You have to have a Redis server already running at `127.0.0.1:6379`.

## Setup

1. Make sure Node 16 is installed
1. `npm i` inside root of project folder
1. `node index.js` from root of project folder to start the server

## .env

Create the below .env file in root with your Twitter API credentials:

```JS
API=
API_SECRET=
BEARER_TOKEN=
ACCESS_TOKEN=
ACCESS_TOKEN_SECRET=
REDIS_URL=redis://127.0.0.1
```

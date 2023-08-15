

# photography-site

This sample app demonstrates a photography site by using [`express`](https://www.npmjs.com/package/express), [`mongoose`](https://github.com/Automattic/mongoose) and [`stargate-mongoose`](https://github.com/stargate/stargate-mongoose). 

## Environment

Make sure you have Node.js 14 or higher and a local Stargate instance running as described on the [main page](../README.md) of this repo.

## .env

create a .env file as following:

```
OPENAI_API_KEY = your openAI API key for using embedding
NODE_ENV = development
JSON_API_URL = http://127.0.0.1:8181/v1/photography
AUTH_URL = http://localhost:8081/v1/auth

```

## Running This Sample

1. Run `npm install`
1. Run `npm run seed`
1. Run `npm start`
1. Visit `http://127.0.0.1:3000` to see the UI


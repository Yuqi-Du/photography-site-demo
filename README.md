

# photography-site

This sample app demonstrates a photography site by using [`express`](https://www.npmjs.com/package/express), [`mongoose`](https://github.com/Automattic/mongoose) and [`stargate-mongoose`](https://github.com/stargate/stargate-mongoose). 

## Environment

Make sure you have Node.js 14 or higher

Make sure you a local Stargate instance(DSE-Next) running as described on the [main page](../README.md) of this repo.

Make sure you have a local python environment.

## .env

create a .env file as following:

```
OPENAI_API_KEY = your openAI API key for using embedding
NODE_ENV = development
JSON_API_URL = http://127.0.0.1:8181/v1/photography
AUTH_URL = http://localhost:8081/v1/auth

```

## Running This Sample
> Clone [`stargate-mongoose`](https://www.npmjs.com/package/express) locally, edit the package.json
1. Run `npm install`
2. Run `npm run seed`
3. Run `npm start`
4. Visit `http://127.0.0.1:3000` to see the UI


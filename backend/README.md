# Pragma Brewery Backend Side

This is the PragmaTeam program test backend layer with two diferent runtime options: One simple console log which can be runned in a terminal and one Express Server providing a REST endpoint.

## To Run
### Install the dependencies

```
npm install
```

Or

```
yarn
```

### Define the client address

It is necessary to define an `.env` file in the root of the `backend` module, with a single variable `FRONTEND_HOST` that should point to the address where the `frontend` module is running. This is necessary to configure the `CORS` module and allow the frontend layer to access the data from the backend layer.

For exemple:

```
FRONTEND_HOST=http://localhost:3000
```

### Run localy with you console

It is possible to run the backend layer in two ways: 

The first is a simple `log` system that prints the current temperature of the beers on console. You can run this system with the command below:

```
node console.js
```

The second option is to run the server itself which will expose a `REST` endpoint that returns a list with the current temperature for each beer. Execute the following command to run the server:

```
node express.js
```

The REST endpoint can also be accessed by web-browser through the address:

```
http://localhost:4000/api
```

The file `src/thermostats/random.thermostat.js` is a example of a good point that can be change in the future with a new version of this system. I am imagining in a real scenary we can have a fisical sessor and one interface to get the real temperature from ther beers. This random function is just one mock prototype to get different results and situations in the test scenary.

### TODO

1 - For the version 2.0, we can have a real phisical sensor that will return the real temperatures.

# Pragma Brewery Frontend Side

This is the PragmaTeam program test frontend layer. A unique and simple dynamic page that lists the current temperature of each beer carried by the driver.

## To Run
### Install the dependencies

```
npm install
```

Or

```
yarn
```

### Define the server address

It is necessary to define an `.env` file in the root of the `frontend` module, with a single variable `REACT_APP_HOST` that should point to the address where the `backend` module is running. 

For exemple:

```
REACT_APP_HOST=http://localhost:4000
```

### Run localy

Make sure the backend module is running and execute:

```
npm start
```

Or 

```
yarn start
```

This module was built with the help of the standard `React` project generator. When you run it, you can access the application from the address `http://localhost:3000`.

### TODO

1 - Improving UX design providing a modern view.

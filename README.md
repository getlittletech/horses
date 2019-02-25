# Single page application Horses

## Gettting started

To get started you need to run the following commands at the root:

```
yarn install
yarn start
```

This will install dependencies for both server and client.
It will also start both server and client at development mode.

I have separated the server and client code so that they are decoupled and could be deployed both as Docker microservices or as a monolyth. I haven't prepared the prod environment yet.

## Description

Koa server is run for the API requests.
Create react app was used to create the client. It was ejected and configuration updated to use CSS Modules by default.

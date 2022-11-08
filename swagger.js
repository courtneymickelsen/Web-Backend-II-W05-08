const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Courtney's API",
        description: "Courtney's API for Backend II"
    },
    host: 'web-backend-ii-w05-08.onrender.com',
    schemes: ['http', 'https'],
};

const outputFile = "./swagger.json";
const endpointFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointFiles, doc);
const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Courtney's Personal API",
        description: "Courtney's API for Web Backend II Weeks 5-8"
    },
    host: 'web-backend-ii-w05-08.onrender.com',
    schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointFiles, doc);
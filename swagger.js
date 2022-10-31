const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Courtney's Personal API",
    description: "Courtney's API for Web Backend II Weeks 5-8",
  },
  // Leave blank to make a relative request. This means it will work for
  // localhost and Render!
  host: "",
  schemes: ["http", "https"],
};

const outputFile = "./swagger.json";
const endpointFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointFiles, doc);

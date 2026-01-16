const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'CSE341-contacts',
        description: 'Users API for CSE341-contacts',
    },
    host: 'localhost:3000',
    schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js', './routes/users.js'];


swaggerAutogen(outputFile, routes, doc);
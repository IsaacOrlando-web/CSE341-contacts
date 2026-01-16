const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'CSE341-contacts',
        description: 'Users API for CSE341-contacts',
    },
    host: 'cse341-contacts-9uuu.onrender.com',
    basePath: '/users',
    schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const routes = ['./routes/users.js'];


swaggerAutogen(outputFile, routes, doc);
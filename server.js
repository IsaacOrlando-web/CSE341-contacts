const dotenv = require('dotenv').config({ path: './.env' });
const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./db/database');
const app = express();
const port = 3000;

//routes
const router = require('./routes/index');
const userRouter = require('./routes/users');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.use(bodyParser.json());

app.use('/', router);
app.use('/users', userRouter);

mongodb.initDb().then(() => app.listen(port, () => console.log(`App listening on port ${port}!`)));
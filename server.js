const dotenv = require('dotenv').config({ path: './.env' });
const express = require('express');

const mongodb = require('./db/database');
const app = express();
const port = 3000;

//routes
const router = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', router);
app.use('/users', usersRouter);

mongodb.initDb().then(() => app.listen(port, () => console.log(`App listening on port ${port}!`)));
const mongodb = require('../db/database');
const ObjectId = require('mongodb').ObjectId;

const getAllUsers = async (req, res, next) => {
    const result = await mongodb.getDatabase().collection('users').find();
    console.log(result);
    result.toArray().then(users => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
}

const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().collection('users').find({ _id: userId });
    result.toArray().then(users => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
}

module.exports = {
    getAllUsers,
    getSingle
};
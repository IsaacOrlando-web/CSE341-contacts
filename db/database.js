const { MongoClient } = require('mongodb');

const uri = `${process.env.DB_CLUSTER_URL}`;
const client = new MongoClient(uri);

let database;

async function initDb() {
    try {
        await client.connect();
        database = client.db('users');
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error(e);
    }
}

function getDatabase() {
    return database;
}

async function closeDb() {
    await client.close();
    console.log("Disconnected from MongoDB");
}

module.exports = {
    initDb,
    getDatabase,
    closeDb
};
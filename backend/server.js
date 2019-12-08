const express = require('express');
const app = express();
const logger = require('volleyball');
var cors = require('cors');

const monk = require('monk');
const db = monk('mongodb://mongo:27017/test');

const users = db.get('users');

const port = 4000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => res.send('Hello World! 🚀'));

app.get('/users', (req, res) => {
    users.find({}).then(data => res.json(data));
});

app.post('/users', (req, res) => {
    try {
        users.insert(req.body).then(r => res.status(200).json(r));
    } catch (error) {
        res.status(500).json(error);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

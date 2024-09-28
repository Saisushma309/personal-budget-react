const express = require("express");
const cors = require('cors');
const app = express();
const port = 3001;

app.use('/', express.static('public'));

app.use(cors())

const budget = require('./data.json');

app.get("/budget", (req, res) => {
    res.json(budget);
})

app.listen( port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
} )
const express = require('express');
const bodyParser = require('body-parser');
var db = require('./models');
require('dotenv').config()
const MatchupService = require("./services/matchupService");


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', async function(req, res) {
    const l = await MatchupService.getHeadToHeadResults(1, 3);
    console.log(l)
    res.send(l);
});

// Slash Command Routes
//app.use('/matchups', require('./routes/matchups'));

const PORT = 3000;

db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
        console.log('Server started on port 3000.')
    })
});
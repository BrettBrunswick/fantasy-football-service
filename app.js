const express = require('express');
const bodyParser = require('body-parser');
var db = require('./models');
require('dotenv').config()
const MatchupService = require("./services/matchupService");
const SlackBotService = require('./services/slackbotService');
const MessageFormatter = require('./services/messageFormatter');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const slackBot = new SlackBotService();

app.get('/', async function(req, res) {
    const l = await MatchupService.getWeeklySummary();
    const message = MessageFormatter.formatWeeklySummary(l);
    //slackBot.postToMatchupsChannel(message);
    res.send(l);
});

// Slash Command Routes
app.use('/slack/slashCommands', require('./routes/slackSlashCommands'));

const PORT = 3000;

db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
        console.log('Server started on port 3000.');
    })
});
const express = require('express');
const router = express.Router();
const SeasonRepository = require("../repositories/seasonRepository");
const MessageFormatter = require('../services/messageFormatter');


const mentionedSlackUsersRegex = /\<([^\s]+)\>/g;
const userNameRegEx = /\|(\S+)\>/;
const yearRegEx = /(20)\d{2}/g;


router.post('/record', async (req, res) => {
    const slackBot = req.app.get('slackBot');
    console.log(req.body);
    const reqUserName = req.body.user_name;
    const reqText = `${req.body.command} ${req.body.text}`;
    slackBot.notifyCommisionerOfUsage();
    const allSeasons = await SeasonRepository.getAll().map(x => x.year);
    let mentionedSlackUsers = req.body.text.match(mentionedSlackUsersRegex);
    if (mentionedSlackUsers != null) {
        const mentionedSlackUserNames = [];
        console.log(`mentionedSlackUsers count: ${mentionedSlackUsers.length}`)
        mentionedSlackUsers.forEach(mentionedUser => {
            console.log(`slack user: ${mentionedUser}`)
            mentionedUserName = mentionedUser.match(userNameRegEx);
            mentionedSlackUserNames.push(mentionedUserName[1]);
            console.log(`slack user name: ${mentionedUserName[1]}`);
            if (mentionedSlackUserNames.length > 2) {
                slackBot.postMessageToUser(reqUserName, `you can only compare up to 2 managers!`);
            }
        });
        var year = req.body.text.match(yearRegEx)
        console.log(`year: ${year}`)
    } else {
        const message = MessageFormatter.formatErrorSlackSlachCommand(reqText, 'you forgot to specify a manager!', '`/record @manager [year]\`')
        slackBot.postMessageToUser(reqUserName, null, message);
    }
})

module.exports = router;

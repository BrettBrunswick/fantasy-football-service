const express = require('express');
const router = express.Router();
const SeasonRepository = require("../repositories/seasonRepository");
const ManagerRepository = require("../repositories/managerRepository");


const mentionedSlackUsersRegex = /\<([^\s]+)\>/g;
const userNameRegEx = /\|(\S+)\>/;
const yearRegEx = /(20)\d{2}/g;


router.post('/record', async (req, res) => {
    const slackBot = req.app.get('slackBot');
    slackBot.notifyCommisionerOfUsage();
    console.log(req.body)
    const reqUserName = req.body.user_name
    const allSeasons = await SeasonRepository.getAll();
    const allManagers = await ManagerRepository.getAll();
    let mentionedSlackUsers = req.body.text.match(mentionedSlackUsersRegex);
    const mentionedSlackUserNames = [];
    if (mentionedSlackUsers != null) {
        console.log(`mentionedSlackUsers count: ${mentionedSlackUsers.length}`)
        mentionedSlackUsers.forEach(mentionedUser => {
            console.log(`slack user: ${mentionedUser}`)
            mentionedUserName = mentionedUser.match(userNameRegEx);
            mentionedSlackUserNames.push(mentionedUserName[1]);
            console.log(`slack user name: ${mentionedUserName[1]}`);
            if (mentionedSlackUserNames.length > 0) {
            }
        });
        var year = req.body.text.match(yearRegEx)
        console.log(`year: ${year}`)
    } else {
        res.status(200).send();
    }
})

module.exports = router;

const express = require('express');
const router = express.Router();
const SeasonRepository = require("../repositories/seasonRepository");
const ManagerRepository = require("../repositories/managerRepository");
const MessageFormatter = require('../services/messageFormatter');
const MatchupService = require('../services/matchupService');


const mentionedSlackUsersRegex = /\<([^\s]+)\>/g;
const yearRegEx = /(20)\d{2}/g;


router.post('/record', async (req, res) => {
    const slackBot = req.app.get('slackBot');
    console.log(req.body);
    const reqUserName = req.body.user_name;
    const reqText = `${req.body.command} ${req.body.text}`;
    slackBot.notifyCommisionerOfUsage();
    const allSeasons = await SeasonRepository.getAll().map(x => x.year);
    console.log(` all seasons ${'2017' == allSeasons[0]}`)
    let mentionedSlackUsers = req.body.text.match(mentionedSlackUsersRegex);
    if (mentionedSlackUsers == null) {
        const message = MessageFormatter.formatErrorSlackSlachCommand(reqText, 'You forgot to specify a manager!', '`/record @manager [year]\`')
        slackBot.postMessageToUser(reqUserName, null, message);
    } else if (mentionedSlackUsers.length > 2) {
        const message = MessageFormatter.formatErrorSlackSlachCommand(reqText, 'You can only specify up to 2 managers!', '`/record @manager @manager [year]\`')
        slackBot.postMessageToUser(reqUserName, null, message);
    } else {
        let year = req.body.text.match(yearRegEx)
        console.log(`year: ${year}`)

        if (mentionedSlackUsers.length == 1) {
            // career stats
            slackId = mentionedSlackUsers[0];
            if (year == null) {
                console.log("carrerr")
                manager = await ManagerRepository.getBySlackId(slackId);
                const teamId = manager[0].Team.id;
                careerStats = await MatchupService.getCarrerStats(teamId);

                const message = MessageFormatter.formatCareerStats(careerStats)
                slackBot.postMessageToUser(reqUserName, null, message);
            // year specific
            } else if (allSeasons.includes(year)) {
                
            // invalid season
            } else {
                const message = MessageFormatter.formatErrorSlackSlachCommand(reqText, `${year} is not a valid season!`, '`/record @manager 2018`')
                slackBot.postMessageToUser(reqUserName, null, message);
            }
        } else {

        }
    }
})

module.exports = router;

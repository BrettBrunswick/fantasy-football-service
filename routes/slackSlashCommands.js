const express = require('express');
const router = express.Router();
const SeasonsService = require('../services/seasonService');

const mentionedSlackUsersRegex = /\<([^\s]+)\>/g;
const userNameRegEx = /\|(\S+)\>/;
const yearRegEx = /(20)\d{2}/g;


router.post('/record', async (req, res) => {
    console.log(req.body)
    const reqUserName = req.body.user_name
    const allSeasons = await SeasonsService.getAllSeasons();
    let mentionedSlackUsers = req.body.text.match(mentionedSlackUsersRegex);
    const mentionedSlackUserNames = [];
    if (mentionedSlackUsers != null) {
        console.log(`mentionedSlackUsers count: ${mentionedSlackUsers.length}`)
        mentionedSlackUsers.forEach(mentionedUser => {
            console.log(`slack user: ${mentionedUser}`)
            mentionedUserName = mentionedUser.match(userNameRegEx);
            mentionedSlackUserNames.push(mentionedUserName[1]);
            console.log(`slack user name: ${mentionedUserName[1]}`)
        });
        var year = req.body.text.match(yearRegEx)
        console.log(`year: ${year}`)
    } else {
        res.status(200).send();
    }
})

module.exports = router;

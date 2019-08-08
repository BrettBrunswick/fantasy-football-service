const express = require('express');
const router = express.Router();
const SeasonsService = require('../services/seasonService');

const betweenCarrotsRegex = /\<([^)]+)\>/;
const userNameRegEx = /\|(\S+)/;
const yearRegEx = /(20)\d{2}/gm;


router.post('/record', async (req, res) => {
    console.log(req.body)
    const reqUserName = req.body.user_name
    const allSeasons = await SeasonsService.getAllSeasons();
    let betweenCarrots = req.body.text.match(betweenCarrotsRegex)[1];
    console.log(`betweenCarrots: ${betweenCarrots}`)
    var userName = betweenCarrots.match(userNameRegEx)[1];
    console.log(`User: ${userName}`)
    var year = req.body.text.match(yearRegEx)
    console.log(`year: ${year}`)
})

module.exports = router;

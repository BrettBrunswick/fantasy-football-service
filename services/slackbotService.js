const SlackBot = require('slackbots');

class slackBotService {
    constructor() {
        this.bot = new SlackBot({
            token: process.env.SLACK_BOT_TOKEN,
            name: process.env.SLACK_BOT_NAME
        });

        this.bot.on('start', () => {
            //this.bot.postMessageToChannel('message', 'general')
        });

        this.bot.on('error', err => console.log(err));
    }
    
    postMessageToUser(username, message, block) {
        this.bot.postMessageToUser(username, message, block);
    }

    postToMatchupsChannel(message) {
        this.bot.postMessageToChannel(process.env.SLACK_MATCHUP_CHANNEL, null, message);
    }

    notifyCommisionerOfUsage(message) {
        this.bot.postMessageToUser(process.env.COMMISIONER_SLACK_USERNAME, null, message);
    }
}

module.exports = slackBotService;
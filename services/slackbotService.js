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
    

    postToMatchupsChannel(message) {
        console.log(`token: ${process.env.SLACK_BOT_TOKEN},  name: ${process.env.SLACK_BOT_NAME}`)
        this.bot.postMessageToChannel(process.env.SLACK_MATCHUP_CHANNEL, null, message);
    }
}

module.exports = slackBotService;
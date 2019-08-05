class MessageFormatter {

  static formatWeeklySummary(summary) {
    let block = [];

    const divider = { type: 'divider' }
    block.push(divider);

    const headerWeek = {
		type: 'section',
		text: {
			type: 'mrkdwn',
			text: `*Week ${summary.week.week}* :football:`
		}
    };
    block.push(headerWeek);

    const headerWeekType = {
		type: 'context',
		elements: [
			{
				type: 'mrkdwn',
				text: summary.week.isPlayoffs ? 'Playoffs' : 'Regular Season'
			}
		]
	};
    block.push(headerWeekType);
    block.push(divider);

    const helloMessage = {
        type: 'section',
        text: {
            type: 'mrkdwn',
            text: 'Hello, BTown Boys! Who\'s ready for some football!? Let\'s take a look at this week\'s matchups.'
        }
    };
    block.push(helloMessage);
    block.push(divider);

    summary.matchups.forEach(matchup => {
        const matchupSummary = {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `${matchup.HomeTeam.Manager.name}'s *_${matchup.HomeTeam.name}_* vs. ${matchup.AwayTeam.Manager.name}'s *_${matchup.AwayTeam.name}_*\n\`Lifetime Record:\` *${matchup.headToHead.record}* in favor of *_${matchup.headToHead.winningTeam}_*.\n\`Lifetime Score:\` *${matchup.headToHead.score}* in favor of *_${matchup.headToHead.highScoreTeam}_*.\n\`Last Matchup:\` _${matchup.headToHead.lastMatchup.matchupType} ${matchup.headToHead.lastMatchup.season} Week ${matchup.headToHead.lastMatchup.week}_: *${matchup.headToHead.lastMatchup.score}* in favor of *_${matchup.headToHead.lastMatchup.winningTeam}_*.`
            }
        };

        block.push(matchupSummary);
        block.push(divider);
    })

    return { blocks: block };
  }
}

module.exports = MessageFormatter;

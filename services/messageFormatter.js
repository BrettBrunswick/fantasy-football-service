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

  static formatErrorSlackSlachCommand(request, error, recomendation) {
    const block = 
    [
      {
        'type': 'divider'
      },
      {
        'type': 'section',
        'text': {
          "type": "mrkdwn",
          "text": `*${error}*\n\n*Your Request:*\n\`${request}\`\n\n*Try it like this:*\n${recomendation}`
        },
        'accessory': {
          'type': 'image',
          'image_url': 'https://cdn.shopify.com/s/files/1/0042/8441/6100/products/jr_smith_high_600x600.jpg?v=1544899287',
          "alt_text": "WTF"
        }
      },
      {
        'type': 'divider'
      }
    ];
    return { blocks: block };
  }

  static formatCareerStats(stats) {
    console.log(JSON.stringify(stats))
    const block = 
    [
      {
        'type': 'divider'
      },
      {
        'type': 'section',
        'text': {
          "type": "mrkdwn",
          "text": `*${stats.TeamName}'s* Career Stats:\n\n\`Record:\` *${stats.wins} - ${stats.losses}*\n\`Score:\` *${stats.score}*`
        }
      },
      {
        'type': 'divider'
      }
    ];
    return { blocks: block };
  }

}

module.exports = MessageFormatter;

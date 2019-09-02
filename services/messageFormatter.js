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
      const managerIntro = {
          type: 'section',
          text: {
              type: 'mrkdwn',
              text: `\n${matchup.HomeTeam.Manager.slackId}'s *_${matchup.HomeTeam.name}_* vs. ${matchup.AwayTeam.Manager.slackId}'s *_${matchup.AwayTeam.name}_*\n`
          }
      };

      block.push(managerIntro);
      
      matchup.headToHead.seasons.forEach(season => {
        const seasonSummary = {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `*${season.year}:*\n\`Record:\` *${season.results.record}* ${season.results.winningTeam != null ? `in favor of *_${season.results.winningTeam}_*.` : ``}\n\`Score:\` *${season.results.score}* ${season.results.highScoreTeam != null ? `in favor of *_${season.results.highScoreTeam}_*.` : ``}\n`
            }
        };
  
        block.push(seasonSummary);
      })
  
      const totalSummary = {
          type: 'section',
          text: {
              type: 'mrkdwn',
              text: `\`Lifetime Record:\` *${matchup.headToHead.totals.record}* ${matchup.headToHead.totals.winningTeam != null ? `in favor of *_${matchup.headToHead.totals.winningTeam}_*.` : ``} \n\`Lifetime Score:\` *${matchup.headToHead.totals.score}* ${matchup.headToHead.totals.highScoreTeam != null ? `in favor of *_${matchup.headToHead.totals.highScoreTeam}_*.` : ``}`
          }
      };
  
      block.push(totalSummary);

      const lastMatchupSummary = {
        type: 'section',
        text: {
            type: 'mrkdwn',
            text: `\`Last Matchup:\` _${matchup.headToHead.lastMatchup.matchupType} ${matchup.headToHead.lastMatchup.season} Week ${matchup.headToHead.lastMatchup.week}_: *${matchup.headToHead.lastMatchup.score}* ${matchup.headToHead.lastMatchup.winningTeam != null ? `in favor of *_${matchup.headToHead.lastMatchup.winningTeam}_*.` : ``}`
        }
    };

    block.push(lastMatchupSummary);
    block.push(divider);
  });

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

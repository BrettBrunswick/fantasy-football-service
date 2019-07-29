// Used as a console app to seed MatchupResults.

const readline = require('readline-sync');
const models = require('./models');


(async() => {
    await getAllMatchups().then(matchups => {
        Array.prototype.forEach.call(matchups, matchup => {
            var homeTeamScore = parseFloat(getScore(matchup.WeekId, matchup.Week.Season.year, matchup.HomeTeam.name));
            var awayTeamScore = parseFloat(getScore(matchup.WeekId, matchup.Week.Season.year, matchup.AwayTeam.name));
            
            createMatchupResult(homeTeamScore, homeTeamScore > awayTeamScore, matchup.HomeTeam.id, matchup.id);
            createMatchupResult(awayTeamScore, awayTeamScore > homeTeamScore, matchup.AwayTeam.id, matchup.id);
        });
    });
})();

function getAllMatchups() {
    return models.Matchup.findAll({
        order: [
          ['id', 'ASC']
        ],
        include: [{
            model: models.Team, as: 'HomeTeam',
            attributes: ['id', 'name']
          },
          {
            model: models.Team, as: 'AwayTeam',
            attributes: ['id', 'name']
          },
          {
            model: models.Week,
            attributes: ['id'],
            include: [{
                model: models.Season,
                attributes: ['year'],
            }]
          }]
    });
}

function createMatchupResult(score, won, teamId, matchupId) {
    models.MatchupResult.create({
        score: score,
        won: won,
        TeamId: teamId,
        MatchupId: matchupId,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(result => {console.log(`\nsaved ${result.id}`)})
    .catch(err => console.log(`ERROR: ${err}`));
}

function getScore(week, year, team) {
    return readline.question(`${team} week ${week} ${year} score:\n`);
}

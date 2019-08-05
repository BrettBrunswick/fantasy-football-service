const MatchupsRepository = require("../repositories/matchups");
const MatchupResultsRepository = require("../repositories/matchupResults");


class MatchupService {

  static async getThisWeeksMatchups() {
    let weekId = 30;
    const matchups = await MatchupsRepository.getAllInWeek(weekId);

    return matchups;
  }

  static async getHeadToHeadMatchupIds(team1Id, team2Id) {
    const matchupIds = await MatchupsRepository.getHeadToHeadMatchupIds(team1Id, team2Id);

    return matchupIds.map(x => x.id);
}

static async getLastHeadToHeadMatchup(team1Id, team2Id) {
  const result = await MatchupsRepository.getLastHeadToHeadMatchup(team1Id, team2Id);

  return result;
}

static formatWeeklyMatchups(matchups) {
  const formattedMatchups = [];
  matchups.forEach(x => {
    const formattedMatchup = {
      HomeTeam: x.HomeTeam,
      AwayTeam: x.AwayTeam
    };
    formattedMatchups.push(formattedMatchup);
  })
  const result = {
    week: matchups[0].Week,
    matchups: formattedMatchups
  };

  return result;
}

static async getWeeklySummary() {
  let matchups = await this.getThisWeeksMatchups();
  matchups = this.formatWeeklyMatchups(matchups);
  for (const matchup of matchups.matchups) {
    matchup.headToHead = await this.getHeadToHeadResults(matchup.HomeTeam.id, matchup.AwayTeam.id)
  }

  return matchups;
}

  static async getHeadToHeadResults(team1Id, team2Id) {
    const matchupIds = await this.getHeadToHeadMatchupIds(team1Id, team2Id);
    const results = await MatchupResultsRepository.getHeadToHeadResults(team1Id, team2Id, matchupIds);
    const team1Results = this.getResultsForTeam(results, team1Id);
    const team2Results = this.getResultsForTeam(results, team2Id);
    const result = this.combineResults(team1Results, team2Results);
    const lastMatchup = await this.getLastHeadToHeadMatchup(team1Id, team2Id);
    const prettyLastMatchup = this.prettyLastMatchup(lastMatchup);

    result.lastMatchup = prettyLastMatchup;

    return result;
  }

  static prettyLastMatchup(lastMatchup) {
    let scores = [lastMatchup.MatchupResults[0].score, lastMatchup.MatchupResults[1].score].sort(this.sortNumber);
    let winningTeam = lastMatchup.MatchupResults.find(results => {
      return results.won == true
    })

    console.log(`winning: ${JSON.stringify(winningTeam)}`);
    const result = {
      week: lastMatchup.Week.week,
      season: lastMatchup.Week.Season.year,
      matchupType: lastMatchup.MatchupType.name,
      winningTeam: winningTeam.Team.name,
      score: `${scores[0]} - ${scores[1]}`
    }

    return result;
  }

  static getWinningTeam(team1Results, team2Results) {
    var winningTeam = null;
    if (parseFloat(team1Results.wins) > parseFloat(team2Results.wins)) {
        winningTeam = team1Results.TeamName;
    } else {
      winningTeam = team2Results.TeamName;
    }

    return winningTeam;
  }

  static getHighScoringTeam(team1Results, team2Results) {
    var highScoreTeamId = null;
    if (parseFloat(team1Results.score) > parseFloat(team2Results.score)) {
        highScoreTeamId = team1Results.TeamName;
    } else {
        highScoreTeamId = team2Results.TeamName;
    }

    return highScoreTeamId;
  }

  static combineResults(team1Results, team2Results) {
    const winningTeamId = this.getWinningTeam(team1Results, team2Results);
    const highScoreTeamId = this.getHighScoringTeam(team1Results, team2Results);
    var wins = [team1Results.wins, team2Results.wins].sort(this.sortNumber);
    var record = `${wins[0]} - ${wins[1]}`
    var scores = [team1Results.score, team2Results.score].sort(this.sortNumber);
    var score = `${scores[0]} - ${scores[1]}`

      const result = {
        winningTeam: winningTeamId,
        record: record,
        highScoreTeam: highScoreTeamId,
        score: score
      };

      return result;
  }

  static getResultsForTeam(allMatchupResults, teamId) {
    var teamResults = allMatchupResults.filter(item => {
        return item.TeamId === teamId
        });
    
    return this.prettyStats(teamResults);
  }

  static countWins(teamResults) {
    return teamResults.filter(x => x.won).length
  }

  static sumScore(teamResults) {
    var score = 0.0;
    for (var i = 0; i < teamResults.length; i++) {
        score += parseFloat(teamResults[i].score);
      }
      return score.toFixed(2);
  }

  static prettyStats(teamResults) {
    var result = {
      TeamName: teamResults[0].Team.name,
      wins: this.countWins(teamResults),
      score: this.sumScore(teamResults)
    };
    
    return result;
  }

  static sortNumber(a, b) {
    return b - a;
  }
}

module.exports = MatchupService;
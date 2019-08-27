const MatchupsRepository = require("../repositories/matchupRepository");
const MatchupResultsRepository = require("../repositories/matchupResultRepository");
const SeasonRepository = require("../repositories/seasonRepository");


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

static async getIndividualMatchupIds(teamId) {
  const matchupIds = await MatchupsRepository.getIndividualMatchupIds(teamId);

  return matchupIds.map(x => x.id);
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
    matchup.headToHead = await this.getHeadToHeadResultsWithSeason(matchup.HomeTeam.id, matchup.AwayTeam.id)
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

    //const seasonsBothPlayed = Seasons

    result.lastMatchup = prettyLastMatchup;

    return result;
  }

  static async getHeadToHeadResultsWithSeason(team1Id, team2Id) {
    const seasonsWithMatchups = await SeasonRepository.getHeadToHeadSeasonsWithMatchups(team1Id, team2Id);

    if (seasonsWithMatchups.length > 0) {
      // Played each other
      console.log(JSON.stringify(seasonsWithMatchups));
      let newResult = {
        seasons: []
      };
      let allMatchupIds = [];
      seasonsWithMatchups.forEach(season => {
        let seasonMatchupIds = [];
        season.Weeks.forEach(week => {
          seasonMatchupIds.push(week.Matchups[0].id);
          allMatchupIds.push(week.Matchups[0].id);
        })
        const elememt = {
          year: season.year,
          matchupIds: seasonMatchupIds
        };
        newResult.seasons.push(elememt)
      });
      
      for (const season of newResult.seasons) {
        const results = await MatchupResultsRepository.getHeadToHeadResults(team1Id, team2Id, season.matchupIds);
        const team1Results = this.getResultsForTeam(results, team1Id);
        const team2Results = this.getResultsForTeam(results, team2Id);
        season.results = this.combineResults(team1Results, team2Results);
      }
      const lastMatchup = await this.getLastHeadToHeadMatchup(team1Id, team2Id);
      const prettyLastMatchup = this.prettyLastMatchup(lastMatchup);

      newResult.lastMatchup = prettyLastMatchup;


      // Totals
      const totalResults = await MatchupResultsRepository.getHeadToHeadResults(team1Id, team2Id, allMatchupIds);
      const team1TotalResults = this.getResultsForTeam(totalResults, team1Id);
      const team2TotalResults = this.getResultsForTeam(totalResults, team2Id);
      newResult.totals = this.combineResults(team1TotalResults, team2TotalResults);


      console.log(JSON.stringify(newResult));

      return newResult;

    } else {
      // Never played each other
      return null;
    }
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

  static getResultsForTeam(allMatchupResults, teamId, headToHead = false) {
    var teamResults = allMatchupResults.filter(item => {
        return item.TeamId === teamId
    });
    
    return headToHead ? this.prettyStats(teamResults) : this.prettyStats(teamResults, true);
  }

  static countWins(teamResults) {
    return teamResults.filter(x => x.won).length
  }

  static countLosses(teamResults) {
    return teamResults.filter(x => !x.won).length
  }

  static sumScore(teamResults) {
    var score = 0.0;
    for (var i = 0; i < teamResults.length; i++) {
        score += parseFloat(teamResults[i].score);
      }
      return score.toFixed(2);
  }

  static prettyStats(teamResults, countLosses = false) {
    if (countLosses) {
      var result = {
        TeamName: teamResults[0].Team.name,
        wins: this.countWins(teamResults),
        losses: this.countLosses(teamResults),
        score: this.sumScore(teamResults)
      };
    } else {
      var result = {
        TeamName: teamResults[0].Team.name,
        wins: this.countWins(teamResults),
        score: this.sumScore(teamResults)
      };
    }
  
    return result;
  }

  static sortNumber(a, b) {
    return b - a;
  }

  static async getCarrerStats(teamId) {
    const matchupIds = await this.getIndividualMatchupIds(teamId);
    let results = await MatchupResultsRepository.getIndividualResults(teamId, matchupIds);
    results = this.getResultsForTeam(results, teamId);

    console.log(JSON.stringify(results))

    return results;
  }
}

module.exports = MatchupService;
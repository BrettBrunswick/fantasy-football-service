// Used to create array of all MatchupResults prior to 2019 for seeding purposes.

const models = require('./models');
const fs = require('fs');

(async() => {
    let results = [];

    const matchupResults = await getAllMatchupResults();
    matchupResults.forEach(matchupResult => {
        results.push(matchupResult);
    });
    
    fs.writeFile('./seeders/data/matchupResults.json', JSON.stringify(results, null, 4), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('The file was saved!');
    });
})();

function getAllMatchupResults() {
    return models.MatchupResult.findAll({
        attributes: { exclude: ['id'] },
        order: [
          ['id', 'ASC']
        ],
        raw: true
    });
}
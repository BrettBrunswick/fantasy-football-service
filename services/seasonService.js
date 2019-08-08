const SeasonsRepository = require("../repositories/seasons");


class SeasonService {

  static async getAllSeasons() {
    const seasons = await SeasonsRepository.getAll();

    return seasons;
  }
}

module.exports = SeasonService;
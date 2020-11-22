const { join } = require("path");
const fileName = join(__dirname, "../../databases", "data.json");

const HeroService = require("../services/heroService");
const HeroRepository = require("../repositories/heroRepository");

const generateInstance = () => {
  const heroRepository = new HeroRepository({ file: fileName });
  const heroService = new HeroService({ heroRepository });

  return heroService;
};

module.exports = { generateInstance };

const { readFile, writeFile } = require("fs/promises");

class HeroRepository {
  constructor({ file }) {
    this.file = file;
  }

  async _currentFileContent() {
    return JSON.parse(await readFile(this.file));
  }
  async find(itemId) {
    const all = await this._currentFileContent();
    if (!itemId) return all;

    return all.find(({ id }) => itemId === id);
  }
  async create(data) {
    const currentFile = await this._currentFileContent();
    currentFile.push(data);

    await writeFile(this.file, JSON.stringify(currentFile));
    return data.id;
  }
}

module.exports = HeroRepository;

// const heroRepository = new HeroRepository({
//   file: "./../../databases/data.json",
// });
// heroRepository.find(1).then(console.log).catch(console.error);
// heroRepository
//   .create({
//     id: 2,
//     name: "Pelé",
//     age: 110,
//     power: "Ancient",
//   })
//   .then(console.log)
//   .catch(console.error);

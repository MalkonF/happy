// pega os dados fakes e coloca na constante orphanages
const orphanages = require("./database/fakedata.js");

module.exports = {
  index(req, res) {
    return res.render("index");
  },
  orphanage(req, res) {
    return res.render("orphanage");
  }, // interpola para o frontend
  orphanages(req, res) {
    return res.render("orphanages", { orphanages });
  },
  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },
};

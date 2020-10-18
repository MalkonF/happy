// importar dependencia

const express = require("express");
const path = require("path");
const pages = require("./pages.js");
//iniciar o express

const server = express();
// utilizando os arquivos estáticos
server.use(express.static("public"));

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");
//criar uma rota
server.get("/", pages.index);
server.get("/orphanage", pages.orphanage);
server.get("/orphanages", pages.orphanages);
server.get("/create-orphanage", pages.createOrphanage);

//ligar o servidor

server.listen(5500);

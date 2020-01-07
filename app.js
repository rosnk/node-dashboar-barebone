const express = require("express");
var sassMiddleware = require("node-sass-middleware");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

const middlewares = require("./node_middleware");
middlewares.handlebar(app, exphbs);
middlewares.sassMiddleware(app, sassMiddleware, path);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("index", { title: "hurrican" }));

app.get("/banner-img", (req, res) =>
  res.render("banner", { title: "hurrican" })
);

const port = 3000;
app.listen(port, () =>
  console.log(`Server Dinesh_Soap listening on port ${port}!`)
);

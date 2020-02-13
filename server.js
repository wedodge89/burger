const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/favicon.ico', express.static('public/favicon.ico'));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
// import express and express-handlebars
const express = require("express");
const expressHandlebars = require("express-handlebars");
const path = require("path");

const routes = require("./routes");
const helpers = require("./helpers");

// declare PORT
const PORT = process.env.PORT || 4000;

// create app
const app = express();

// create handlebars instance
const hbs = expressHandlebars.create({ helpers });

// connect express app to handlebars engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// setup middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect app to routes
app.use(routes);

// connect app to PORT
app.listen(PORT, () => console.log(`Navigate to http://localhost:${PORT}`));

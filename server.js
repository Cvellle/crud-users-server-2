"use strict";

const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const config = require("./app/global/config");
const mongoose = require("mongoose");

const expressGraphQL = require("express-graphql");

const GraphQLSchema = require("./app/graphql");

mongoose.Promise = require("bluebird");
mongoose.connect(config.database.HOST);

const app = express();

app.set("port", config.server.PORT);
app.disable("x-powered-by");

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(body_parser.json({ limit: "50mb" }));
app.use(body_parser.urlencoded({ limit: "50mb", extended: true }));

app.use(
  "/graphql",
  expressGraphQL(() => {
    return {
      graphiql: true,
      schema: GraphQLSchema,
    };
  })
);

app.get("/", (req, res) => {
  res.json({
    code: 200,
    message: "Hello World",
  });
});

app.listen(app.get("port"), () => {
  console.log("GraphQL Server Running");
});

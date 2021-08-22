require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require("./routes/app.router.js");
const mongoose = require("mongoose");
const path = __dirname + '/views/';

// Connect to db
const mongo = {
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  db: process.env.MONGO_DB,
  collection: process.env.MONGO_COLLECTION_NAME,
  hostname: process.env.MONGO_CLUSTER_URL
};
mongoose.connect(
  `mongodb+srv://${mongo.username}:${mongo.password}@${mongo.hostname}/${mongo.db}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

app.use(express.static(path));

/**  Parse the body of the request */
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

/** Rules of our API */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  next();
});

/** Routes go here */
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});
app.use("/api", routes);

/** Error handling */
app.use((req, res, next) => {
  const error = new Error("Not found");

  res.status(404).json({
    message: error.message,
  });
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB Connected");
  app.listen(PORT, () => {
    console.log(`Yay! Server running on PORT: ${PORT}`);
  });
});

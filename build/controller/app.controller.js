const { default: axios } = require("axios");
const db_leaderboard = require("../model/schema");
const CONFIG = require("../config");

const getDataFromAWS = async (req, res, next) => {
  let response = {};
  try {
    const r = await axios.get(CONFIG.URL);
    response = {
      status: "success",
      data: r.data,
    };
  } catch (e) {
    response = {
      status: "error",
      error: e.message,
    };
  }
  res.status(200).json(response);
};

const getFullDataFromDB = async (req, res) => {
  const data = await db_leaderboard.find();
  res.json({ status: "success", data: data });
};

const getPageData = (req, res) => {
  const resultsPerPage = CONFIG.PAGE_SIZE || 9;
  const queryParams = req.query;
  const sortBy = queryParams.sortBy || "asc";
  const sortOn = queryParams.sortOn || "Rank";
  const pageSize = CONFIG.PAGE_SIZE;

  let page = queryParams.page || 1;
  page = +page - 1;

  if (page < 0) page = 0;

  db_leaderboard
    .find({})
    .sort({ [sortOn]: sortBy })
    .limit(resultsPerPage)
    .skip(resultsPerPage * page)
    .then((results) => {
      return res.status(200).send(results);
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const importData = (req, res) => {
  axios
    .get(CONFIG.URL)
    .then((response) => {
      const { data } = response;
      db_leaderboard.db.dropCollection(
        "leaderboard",
        async function (err, result) {
          console.log("Dropped collection");
          await db_leaderboard.insertMany(data);
          return res.json({
            status: "success",
            message: "successfully imported",
          });
        }
      );
    })
    .catch((e) => {
      res.json({ status: "error", error: e.message });
    });
};

const updateData = (req, res) => {
  const { _id, key, value } = req.body;
  db_leaderboard.findByIdAndUpdate(
    { _id: _id },
    { [key]: value },
    function (err, result) {
      if (err) {
        return res.json({ status: "error", error: err.message });
      }
      return res.json({ status: "success" });
    }
  );
};

module.exports = {
  getDataFromAWS,
  getFullDataFromDB,
  getPageData,
  importData,
  updateData,
};

const express = require("express");
const router = express.Router();
const appController = require("../controller/app.controller");

router.get("/leaderboard/import", appController.importData);
router.get("/leaderboard/aws", appController.getDataFromAWS);
router.get("/leaderboard/full", appController.getFullDataFromDB);

router.get("/leaderboard", appController.getPageData);
router.post("/leaderboard/update", appController.updateData);

module.exports = router;

const mongoose = require("mongoose");

const LeaderboardSchema = new mongoose.Schema(
  {
    Rank: Number,
    Name: String,
    Platform: String,
    Year: String,
    Genre: String,
    Publisher: String,
    Global_Sales: Number,
  },
  {
    collection: "leaderboard",
    timestamps: true,
  }
);

const LeaderboardModel = mongoose.model("leaderboard", LeaderboardSchema);

module.exports = LeaderboardModel;

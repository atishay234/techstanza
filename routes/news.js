const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/Expresserror");
const News = require("../models/news");

router.get("/", async (req, res) => {
  let allnews = await News.find({});
  let dates = await News.aggregate([
    {
      $project: {
        year: { $year: "$date" },
        month: { $month: "$date" },
        day: { $dayOfMonth: "$date" },
      },
    },
  ]);
  let i = 0;
  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  for (let news of allnews) {
    news.dated = `${months[dates[i].month - 1]},${dates[i].day}`;

    i++;
  }

  res.render("news", { allnews });
});
router.get("/:id", async (req, res) => {
  let { id } = req.params;
  let result = [];
  let allnews = await News.find({}).populate({
    path: "comments",
    populate: {
      path: "author",
    },
  });
  let dates = await News.aggregate([
    {
      $project: {
        year: { $year: "$date" },
        month: { $month: "$date" },
        day: { $dayOfMonth: "$date" },
        hour: { $hour: "$date" },
        minutes: { $minute: "$date" },
        seconds: { $second: "$date" },
        milliseconds: { $millisecond: "$date" },
        dayOfYear: { $dayOfYear: "$date" },
        dayOfWeek: { $dayOfWeek: "$date" },
        week: { $week: "$date" },
      },
    },
  ]);
  let i = 0;
  for (let news of allnews) {
    news.dated = dates[i];
    i++;
  }

  let news = allnews.filter((a) => a._id == id);
  for (inews of allnews) {
    if (inews.brand == news[0].brand) {
      result.push(inews);
    }
  }

  res.render("Inews", { result, news, dates });
});

module.exports = router;

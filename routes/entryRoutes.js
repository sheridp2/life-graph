const mongoose = require("mongoose");

const Entry = mongoose.model("entrys");

module.exports = app => {
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


  app.post("/api/entry", async (req, res) => {
    const { body, highScore, lowScore } = req.body;
    const entry = new Entry({
      body,
      highScore,
      lowScore
    });

    await entry.save();
    const allEntrys = await Entry.find();
    res.send(allEntrys);
  });

  app.get("/api/allentrys", async (req, res) => {
    const allEntrys = await Entry.find();
    res.send(allEntrys);
    console.log(allEntrys);
  });
};

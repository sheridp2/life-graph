const mongoose = require("mongoose");

const Entry = mongoose.model("entrys");

module.exports = app =>{

  app.post("/api/entry", async (req, res) => {
    const{ body, highScore, lowScore } = req.body;
    const entry = new Entry({
      body,
      highScore,
      lowScore
    });

    await entry.save();
    const allEntrys = await Entry.find()
    res.send(allEntrys)

  });

}

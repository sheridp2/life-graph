const mongoose = require("mongoose");
const { Schema } = mongoose;

const entrySchema = new Schema({
  body: String,
  highScore: { type: Number, min: 0, max: 100 },
  lowScore: { type: Number, min: 0, max: 100 },
  entryDate: { type: Date, default: Date.now },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model("entrys", entrySchema);

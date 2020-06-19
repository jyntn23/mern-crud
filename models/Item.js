const mongoose = require("mongoose");
const { String } = require("mongoose/lib/schema/index");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);

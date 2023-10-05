const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true, min: 5, max: 30 },
    author: { type: String, required: true, min: 5, max: 50 },
    publishedDate: { type: String, max: 20, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("bookModel", bookSchema);
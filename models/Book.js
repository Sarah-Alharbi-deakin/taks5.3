// models/Book.js
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },

    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    summary: { type: String, required: true },

    // must be Decimal128
    priceAUD: { type: mongoose.Schema.Types.Decimal128, required: true },
  },
  { versionKey: false }
);

bookSchema.set("toJSON", {
  transform: (_doc, ret) => {
    if (ret.priceAUD) ret.priceAUD = ret.priceAUD.toString();
    return ret;
  },
});

module.exports = mongoose.model("Book", bookSchema);

const mongoose = require("mongoose");

const Store = mongoose.model(
  "Store",
  new mongoose.Schema({
    details: {
      type: Number,
      required: true,
    },
  })
);

module.exports = Store;

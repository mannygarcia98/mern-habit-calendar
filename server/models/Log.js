const { Schema } = require("mongoose");

const logSchema = new Schema({
  completedDay: {
    type: Date,
    default: Date.now,
  },
});

module.exports = logSchema;

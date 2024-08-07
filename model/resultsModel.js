
const mongoose = require("mongoose");

//Schema
const resultsSchema = new mongoose.Schema(
    {
     الجلوس: {
          type:Number,
      },
    الاسم: {
      type: String,
    },
        الدرجة: {
        type:Number,
    }
  },
  { timestamps: true }
);

//model
module.exports= mongoose.model("results", resultsSchema);


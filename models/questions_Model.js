const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    phoneNumber: {
      type: Number,
      require: true,
    },

    email: {
      type: String,
      require: true,
    },

    category:{
        type:String,
        require:true
    },

    projectDetails: [{
        type:Object
    }]
  },
  { timestamp: true }
);

const questionsModel = mongoose.model("quetions", questionsSchema);

module.exports = questionsModel;

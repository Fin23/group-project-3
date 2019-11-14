var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var JobSchema = new Schema({
  // `title` is required and of type String
  jobTitle: {
    type: String,
    required: false
  },
  companyArray: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  summary: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  }
});

// This creates our model from the above schema, using mongoose's model method
var Jobs = mongoose.model("Jobs", JobSchema);

// Export the Article model
module.exports = Jobs;
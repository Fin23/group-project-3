var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var JobSchema = new Schema({
  // `title` is required and of type String
  jobtitle: {
    type: String,
    required: true
  },
  companyArray: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Jobs = mongoose.model("Jobs", JobSchema);

// Export the Article model
module.exports = Jobs;
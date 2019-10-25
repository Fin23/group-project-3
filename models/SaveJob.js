var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var SaveSchema = new Schema({
    title: {
        type: String,

        required: true,

    },
    link: {
        type: String,
        required: true
    }

});
// This creates our model from the above schema, using mongoose's model method
var Save = mongoose.model("Save", SaveSchema);

// Export the Note model
module.exports = SaveJob;
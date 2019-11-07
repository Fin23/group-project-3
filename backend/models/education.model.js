const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const educationSchema = new Schema({
    username:{type: String, required: true },
    school:{type: String, required: true },
    duration: { type: Number, required:true },
    startDate: {type: Date, required: true},
    yearGraduated: {type: Date, required: true},
}, {
    timestamps: true,
});

// api end point routes so server can perform crud operations create read update delete
const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
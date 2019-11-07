// user model 

const mongoose = require('mongoose');

// making a new mongoose schema 
const Schema = mongoose.Schema;

// currently has a single field which is user name, which has validations
const profileSchema = new Schema ({
    username:{
        type: String,
        required:true,
        unique:true,
        trim:true,
        minlength: 3
    },
}, {
    timestamps:true,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
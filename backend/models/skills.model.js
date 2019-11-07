const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const skillsSchema = new Schema({
    skill1:{ type: Number, required: true },
    skillName1:{type: String, required: true },
    skill2:{ type: Number, required: true },
    skillName2:{type: String, required: true },
    skill3:{ type: Number, required: true },
    skillName3:{type: String, required: true },
    skill4:{ type: Number, required: true },
    skillName4:{type: String, required: true },
}, {
    timestamps: true,
});

// api end point routes so server can perform crud operations create read update delete
const Skills = mongoose.model('Skills', skillsSchema);

module.exports = Skills;
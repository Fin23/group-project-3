const router = require('express').Router();

// created model
let Skills = require('../models/skills.model');


// looks for the schools/education
router.route('/').get((req, res) =>{
    Skills.find()
    .then(skill => res.json(skill))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
   
    const skill1 = Number(req.body.skill1);
    const skillName1 = req.body.skillName1;
    const skill2 = Number(req.body.skill2);
    const skillName2 = req.body.skillName2;
    const skill3 = Number(req.body.skill3);
    const skillName3 = req.body.skillName3;
    const skill4 = Number(req.body.skill4);
    const skillName4 = req.body.skillName4;


    const newSkill = new Skills({
      skill1,
      skillName1,
      skill2,
      skillName2,
      skill3,
      skillName3,
      skill4,
      skillName4,
    });

newSkill.save()
.then(() => res.json('Skill added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

// colon id is a variable created by mongo database
router.route('/:id').get((req, res) => {
    Skills.findById(req.params.id)
    .then(skill => res.json(skill))
    .catch(err => res.status(400).json('Error: ' + err));
});

// same thing as above except its a delete for that chosen object with same id
router.route('/:id').delete((req, res) => {
    Skills.findByIdAndDelete(req.params.id)
    .then(() => res.json('Skill deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// if the user creates a post with the update/:id for url, the id is past down to the req.params and when it is found the then fns kick in getting back that json data
router.route('/update/:id').post((req, res) => {
    Skills.findById(req.params.id)
    .then(skill => {
        
        skill.skill1 = Number(req.body.skill1);
        skill.skillName1 = req.body.skillName1;
        skill.skill2 = Number(req.body.skill2);
        skill.skillName2 = req.body.skillName2;
        skill.skill3 = Number(req.body.skill3);
        skill.skillName3 = req.body.skillName3;
        skill.skill4 = Number(req.body.skill4);
        skill.skillName4 = req.body.skillName4;
    
        // new update is saved 
        skill.save()
        .then(() => res.json('skills updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
const router = require('express').Router();

// created model
let Education = require('../models/education.model');


// looks for the schools/education
router.route('/').get((req, res) =>{
    Education.find()
    .then(degrees => res.json(degrees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const school = req.body.school;
    const duration = Number(req.body.duration);
    const startDate = Date.parse(req.body.startDate);
    const yearGraduated = Date.parse(req.body.yearGraduated);

    const newEducation = new Education({
        username,
        school,
        duration,
        startDate,
        yearGraduated,
    });

newEducation.save()
.then(() => res.json('Education added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

// colon id is a variable created by mongo database
router.route('/:id').get((req, res) => {
    Education.findById(req.params.id)
    .then(education => res.json(education))
    .catch(err => res.status(400).json('Error: ' + err));
});

// same thing as above except its a delete for that chosen object with same id
router.route('/:id').delete((req, res) => {
    Education.findByIdAndDelete(req.params.id)
    .then(() => res.json('Education deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// if the user creates a post with the update/:id for url, the id is past down to the req.params and when it is found the then fns kick in getting back that json data
router.route('/update/:id').post((req, res) => {
    Education.findById(req.params.id)
    .then(education => {
        education.username = req.body.username;
        education.school = req.body.school;
        education.duration = Number(req.body.duration);
        education.startDate = Date.parse(req.body.date);
        education.yearGraduated = Date.parse(req.body.date);

        // new update is saved 
        education.save()
        .then(() => res.json('Education updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
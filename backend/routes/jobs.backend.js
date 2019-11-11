const router = require('express').Router();

let Job = require('../models/jobs.model');

router.route('/').get((req, res) => {
    Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const jobtitle = req.body.jobtitle;
    const companyArray = req.body.companyArray;
    const city = req.body.city;
    const state = req.body.state;
    const summary = req.body.summary;
    const link = req.body.link;

    const newJob = new Job({
        jobtitle,
        companyArray,
        city,
        state,
        summary,
        link,
    });

    newJob.save()
    .then(()=> res.json('Job added'))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req, res) => {
    Job.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) =>{
    Job.findByIdAndDelete(req.params.id)
    .then(() => res.json('Job deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Job.create(req.params.id)
router.route('/create/:id').post((req, res)=>{
    Job.create(req.body)
    .then(() => res.json('Job created.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// create: function (req, res) {
//     db.Jobs
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

router.route('/update/:id').post((req, res) =>{
    Job.findById(req.params.id)
    .then(job => {
        job.jobtitle = req.body.jobtitle;
        job.companyArray = req.body.companyArray;
        job.city = req.body.city;
        job.state = req.body.state;
        job.summary = req.body.summary;
        job.link = req.body.link;

        job.save()
        .then(() => res.json('Jobs updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;



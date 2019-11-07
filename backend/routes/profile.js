

// need express route because this is a route we are creating
const router = require ('express').Router();
// require the mongoose model we created
let Profile = require('../models/profile.model');


// first route (end point) that handles incoming get requests on the if user types in /profile/ then the following will happen
router.route('/').get((req,res) => {
    // find is a promise getting the profile data from the data base
    Profile.find()
    .then(profiles => res.json(profiles))
    .catch(err => res.status(400).json('Errors: ' + err));
});


// second route handles post requests 
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newProfile = new Profile({username});

    newProfile.save()
        .then(() => res.json('Profile added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
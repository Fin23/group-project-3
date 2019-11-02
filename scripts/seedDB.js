const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Jobs collection and inserts the Jobs below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/StaKC"
);

const JobSeed = [
  {
    jobTitle: "The Dead Zone",
    companyArray: "Stephen King",
    company: "StaKC",
    city: "Lees Sumiit",
    state: "MO",
    summary: "this is a test",
    date: new Date(Date.now())


  },

];

db.Job
  .remove({})
  .then(() => db.Job.collection.insertMany(JobSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

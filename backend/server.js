const express = require('express');
var cors = require('cors');
// helps connect to mongo data base
const mongoose= require('mongoose');

// environment variables in the env file
require('dotenv').config();
// body parser is no longer needed in the new version of express
// const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT || 5000;

// our middle ware cors and express allows us to parse json we are sending and receiving json
app.use(cors());
app.use(express.json());


// our database uri need to get from the mongo db dashboard our data base is stored in the uri it is how we start our connection 
// need to set the ATLAS_URI which is an environment variable the key to atlas uri is in dotenv file
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
    );
const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
});


// need to make the files in the routes folder first then require them and then use the files
const educationRouter = require('./routes/education');
const profileRouter = require('./routes/profile');
const skillsRouter = require('./routes/skills');


// using the files router is directing the user to the search for file 
app.use('/education', educationRouter);
app.use('/profile', profileRouter);
app.use('/skills', skillsRouter);

// this actually starts the server listens on port
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});

// start this particular server with nodemon server, make sure you are in the correct directory 



var cheerio = require("cheerio");
var axios = require("axios");

// First, tell the console what server3.js is doing
console.log("\n******************************************\n" +
  "Webscraping through LinkUp.com\n" +
  "\n******************************************\n");

// Make request via axios to grab the HTML from Indeeds website
axios.get("https://www.linkup.com/search/results/Web-Developer-jobs?location=independence%2C+mo").then(function (response) {

  // Load the HTML into cheerio
  var $ = cheerio.load(response.data);

  // Make an empty array for saving our scraped info
  var results = [];

  //Use Cheerio and search through each div with class of "result"
  $("div.job-listing").each(function (i, element) {

    //Use Cheerio find method to gather job data info

    console.log(element);

    // let jobTitle = $(element).find("a").text();
    // let companyArray = $(element).find("div.sjcl").find("span.company").text().split(" ");
    // let company = companyArray.slice(-1)[0]; 
    // let city = $(element).find("div.sjcl").find("span.location").text().split(",")[0];
    // let state = $(element).find("div.sjcl").find("span.location").text().split(",")[1];
    // let summary = $(element).find("div.summary").find("b");







    //Push the Job main info into results array

    results.push({
      jobTitle: jobTitle
      // company: company,
      // city: city,
      // state: state,
      // summary: summary
    });
  });

  // After looping through each element found, log the results to the console
  console.log(results);
});

var cheerio = require("cheerio");
var axios = require("axios");

// First, tell the console what server3.js is doing
console.log("\n******************************************\n" +
  "Webscraping through Indeed.com\n" +
  "\n******************************************\n");

// Make request via axios to grab the HTML from Indeeds website

axios.get("https://www.indeed.com/jobs?q=junior+web+developer&l=Independence%2C+MO").then(function (response) {

  // Load the HTML into cheerio
  var $ = cheerio.load(response.data);

  // Make an empty array for saving our scraped info
  var results = [];

  //Use Cheerio and search through each div with class of "result"
  $("div.result").each(function (i, element) {
    //Use Cheerio find method to gather job data info

    let jobTitle = $(element).find("div.title").find("a").attr("title");
    let companyArray = $(element).find("div.sjcl").find("span.company").text().trim();
    let company = companyArray.slice(-1)[0];
    let city = $(element).find("div.sjcl").find("span.location").text().split(",")[0];
    let state = $(element).find("div.sjcl").find("span.location").text().split(",")[1];
    let summary = $(element).find("div.summary").find("ul").text();
    let link = $(element).find("div.title").find("a").attr("href");







    //Push the Job main info into results array

    results.push({
      jobTitle: jobTitle,
      companyArray: companyArray,
      company: company,
      city: city,
      state: state,
      summary: summary,
      link: link
    });


  });

  // After looping through each element found, log the results to the console

  console.log(results);

});

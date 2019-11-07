const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Jobs collection and inserts the Jobs below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/joblistings"
);


// Beginning of Hardcoded Jobs
//-------------------------------------------------------------------------------

const jobHC = [{
  jobTitle: 'Sitecore Architect',
  company: 'Perficient',
  city: 'Kansas City',
  state: 'MO',
  summary: "Mentor and guide junior developers to help them grow their technical and consulting capabilities.You should also be a strong Sitecore developer who is…",
  link:
    '/pagead/clk?mo=r&ad=-6NYlbfkN0DW7tAlIQOkrs19C-punaLjCS_XqbLGSWQbN-7SZkwZEbg7z8uLO7TEJuZBxnrR2n3K1u8MiTuo5VcbhQy1o7qWTp0jc8UqLMVS_f5_I2AUdiaCTk4A8C-QzBeb6n0BTXwf3THwzu5j-YmfzK6bqdwIpZl-E7BAD8d3c41w1Yeas7CjbbYUVtoPBZMXUk-mnfew7N416LtyTHCwu3LyztqMJ_onNdd68T1o6LU0toqVEvsXfORpRB6KDiGPNMfAhrjj3NDXJxSORYnxIYG70pxDr5uSdY_iioxw8bog7xIv2mLbYZTidul4P2KhZQf_wLGRpE8nRTJipAvx21xXny0bLj9S3Rh8GFIaORvo9ozaQcaBPWFE8Rpxx7ioefOoOWvLxrVMyt7ll7yBv8vg1Rgdt3Xkg7KGuJgkf7MqqPF39c1qEliN3aZFphiTDcAoIuCYuyObYO-wBO2NIq_3b9Pswx704HbITFpHtSm17WbEAnJ7n5GY8-xThHonHQUKhVTigMlPRZTFrhJlmpxmh7Hdx0NFxK4g4YWxeaHH1mxklqUL93LRLNjxLg61p7VAsNxt1x5i1S1x8pDM8t-N7-9W6mRxgKbddP5St4nTBG-iET7H210VsNn5&p=0&fvj=0&vjs=3'
},
{
  jobTitle: 'Sitecore Senior Developer',
  company: 'Perficient',
  city: 'Kansas City',
  state: "MO",
  summary: '',
  link:
    '/pagead/clk?mo=r&ad=-6NYlbfkN0DW7tAlIQOkrs19C-punaLjCS_XqbLGSWQbN-7SZkwZEbg7z8uLO7TEJuZBxnrR2n2-ypbY6z4stE-5awJoF6QvhQTl9rDBU5lUGx8my4A-YkegyjG22Q_ap-Jghy2JlQeb3gFrjZJguEMShZERQM4i0guGsvvVTNJxDxNXxkSNBNFDhXQGLvic_0c7yDthJXgRuEnesCFlMEXE6HH6MuO3cbkpq-ZaRHm1_pzRf2pPIlRf2rmyefqvnpVDJi6jou7uLhsqoMkU5Y0wBGTB4OOKurrw8gZXL8aJk0BgmhpffJIJVVB7Y6GKn4x1eKUfP0pB6Rn6DL2tEMzWLg2er2I1r4kN2Zf4eNNwXjX9rVGd5MMROh9WJ_hLb0PQ_hVOHUCsABXhlRGxX7PDIEZ-zkaRfllOzgNaw1Boz7wLvV9kMDSvWHXXdAl92sA5yifD6BloGVTDqQDSHfQ3iECpFQFtM1K0P_5g0VqTqhcCze02fqFsvj3Th2qn0db_lu4ngvZhnmMve7MRk-xukwiGW0IClvH1EdmwHwqQhTpaJgVdCPYaHL31mpvT6uXdW1xvFWlIzOfTy8EEUvXcun2-8JEFBDxP0bzLu0AKmwCW6M0aIKRVqVptR5TNYIHe21l9ing=&p=1&fvj=0&vjs=3'
},
{
  jobTitle: 'Java Developer-Jr.',
  company: 'SAIC',
  city: 'Kansas City',
  state: ' MO 64133',
  summary: "Looking for a Java Developer.Contract.Web Services: 2 years (Required).",
  link: 'www.indeed.com/rc/clk?jk=da93b0f11859d509&fccid=f3b836e645f9b36d&vjs=3'
},
{
  jobTitle: 'Junior AWS Cloud Engineer',
  company: 'Accenture',
  city: 'Kansas City',
  state: ' MO',
  summary: '',
  link: 'www.indeed.com/rc/clk?jk=f21f89f5a0d5c22e&fccid=a4e4e2eaf26690c9&vjs=3'
},
{
  jobTitle: 'Jr. Java Developer',
  company: 'Aptino Inc',
  city: 'Overland Park',
  state: ' KS',
  summary: '',
  link:
    '/company/Aptino-Inc/jobs/Junior-Java-Developer-7cafeea6b1d1fa8d?fccid=af3234d1db9d40ab&vjs=3'
},
{
  jobTitle: 'NET Full Stack Developer',
  company: 'Enormous Enterprise LLC',
  city: 'Kansas City',
  state: ' MO',
  summary: '',
  link:
    '/company/Enormous-Enterprise-LLC/jobs/Net-Full-Stack-Developer-cf92f698f62d8261?fccid=6164137e5552dbe2&vjs=3'
},
{
  jobTitle: 'Summer 2020 Web Team Intern',
  company: 'Dairy Farmers of America',
  city: 'Kansas City',
  state: ' KS',
  summary: '',
  link: 'www.indeed.com/rc/clk?jk=e9143e5b398f9b4b&fccid=df184a6d3eecf48a&vjs=3'
},
{
  jobTitle: 'Full Stack Web Development Teaching Assistant',
  company: 'Trilogy Education Services',
  city: 'Overland Park',
  state: ' KS',
  summary: '',
  link:
    '/company/Trilogy-Education-Services/jobs/Full-Stack-Web-Development-Teaching-Assistant-620d8c80a0a3aec3?fccid=44e83bef98759943&vjs=3'
},
{
  jobTitle: 'C# / Database Developer',
  company: 'CentralSquare Technologies',
  city: 'Overland Park',
  state: ' KS 66212',
  summary: '',
  link: 'www.indeed.com/rc/clk?jk=d1d29e7e0278591d&fccid=24f8cd57633df8fb&vjs=3'
},
{
  jobTitle: 'D365 BC & NAV - Sr. Developer',
  company: 'Sikich LLP',
  city: 'Kansas City',
  state: ' MO',
  summary: '',
  link: 'www.indeed.com/rc/clk?jk=5e13d1ac0a4918e4&fccid=b46f0759a843324d&vjs=3'
},
{
  jobTitle: 'Senior Developer',
  company: 'Burns & McDonnell',
  city: 'Kansas City',
  state: ' MO',
  summary: '',
  link: 'www.indeed.com/rc/clk?jk=e9d58d4eebd45862&fccid=75aff752794baac1&vjs=3'
},
{
  jobTitle: 'Front-End Developer - Javascript - Chicago',
  company: 'Accenture',
  city: 'Overland Park',
  state: ' KS 66210',
  summary: '',
  link: 'www.indeed.com/rc/clk?jk=3782212354fa7eb8&fccid=a4e4e2eaf26690c9&vjs=3'
}];

//------------------------------------------------------------------------------
//End of Hard Coding Jobs



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

db.Jobs
  .remove({})
  .then(() => db.Jobs.collection.insertMany(jobHC))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

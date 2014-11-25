var bio = {
  "name": "Tracy Kuhrt",
  "role": "Software Architect",
  "contacts": {
    "mobile": "480-390-9871",
    //"email": "<a href=\"mailto:tracy.kuhrt@gmail.com\">tracy.kuhrt@gmail.com</a>",
    "email": "tracy.kuhrt@gmail.com",
    "github": "tkuhrt",
    "twitter": "@TracyKuhrt",
    "city": "Apache Junction, Arizona"
  },
  "pictureURL": "images/professional-lowres.jpg",
  "welcomeMsg": "Software architect and engineer with full software development life cycle experience. I have designed and developed a number of database applications, tools to allow others to develop software, and backend services."
};

var work = {
  "jobs": [
    {
      "employer": "PayPal",
      "position": "Senior Member of Technical Staff",
      "years_worked": "2007-current",
      "city": "Scottsdale, Arizona"
    },
    {
      "employer": "Microchip Technologies",
      "position": "Principal Software Engineer",
      "years_worked": "2000-2007",
      "city": "Chandler, Arizona"
    }
  ]
};

var education = {
  "school": "American College of Computer and Information Sciences",
  "degree": "Masters of Computer Science",
  "years_attended": "2000-2006"
};

var name = HTMLheaderName.replace("%data%", bio.name);
var role = HTMLheaderRole.replace("%data%", bio.role);
var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
var city = HTMLlocation.replace("%data%", bio.contacts.city);
var bioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

var employer = HTMLworkEmployer.replace("%data%", work.employer);
var title = HTMLworkTitle.replace("%data%", work.position);
var dates = HTMLworkDates.replace("%data%", work.years_worked);
var workCity = HTMLworkLocation.replace("%data%", work.city);

$("#header").prepend(welcomeMsg);
$("#header").prepend(bioPic);
$("#header").prepend(role);
$("#header").prepend(name);
$("#topContacts").append(mobile);
$("#topContacts").append(email);
$("#topContacts").append(twitter);
$("#topContacts").append(github);
$("#topContacts").append(city);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(employer);
$("#workExperience").append(title);
$("#workExperience").append(dates);
$("#workExperience").append(workCity);

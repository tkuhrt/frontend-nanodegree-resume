var bio = {
  "name": "Tracy Kuhrt",
  "role": "Software Architect",
  "contacts": {
    "mobile": "480-390-9871",
    "email": "tracy.kuhrt@gmail.com",
    "github": "tkuhrt",
    "twitter": "@TracyKuhrt",
    "city": "Apache Junction"
  },
  "pictureURL": "#",
  "welcomeMsg": "Welcome to my resume"
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

$("#header").prepend(welcomeMsg);
$("#header").prepend(bioPic);
$("#header").prepend(role);
$("#header").prepend(name);
$("#topContacts").append(mobile);
$("#topContacts").append(email);
$("#topContacts").append(twitter);
$("#topContacts").append(github);
$("#topContacts").append(city);

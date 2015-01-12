var bio = {
  "who": "Tracy Kuhrt",
  "role": "Software Architect",
  "contacts": {
    "mobile": "480-390-9871",
    "email": "tracy.kuhrt@gmail.com",
    "github": "tkuhrt",
    "twitter": "@TracyKuhrt",
    "city": "Apache Junction, Arizona"
  },
  "skills": {
    "languages": "Python, C, C++, Lex, YACC, Unix shell scripts, IDL, HTML, PHP, Javascript, Pascal, ESQL/C, SQL, PL/SQL, PICmicro, dsPIC, VAX, and Intel Assembly",
    "software": "Iona Technology's Orbix (CORBA), ObjectSpace C++ libraries, Borland's C++, Delphi, Paradox for Windows including extensive use with ObjectPAL, GitHub, ClearCase, CVS, SCCS, PVCS, Tracker, PRO-C",
    "databases": "Zookeeper, Couchbase, NuoDB, PostgreSQL (7.2.2), Informix (7.x), Microsoft SQL Server (6.0), Oracle (7.x, 8.05, 8i, 9i, 10g, 11g), Paradox, FoxPro",
    "OS": "Linux, Sun Solaris, Mac OS X, Windows (2000, XP, NT, 95, 3.1), DOS, System 7, VMS, CMS, Novell Netware 3.11"
  },
  "pictureURL": "images/professional-lowres.jpg",
  "welcomeMsg": "Software architect and engineer with full software development life cycle experience. I have designed and developed a number of database applications, tools to allow others to develop software, and backend services."
};

var experience = {
  "jobs": [
    {
      "employer": "PayPal",
      "position": "Senior Member of Technical Staff",
      "years_worked": "2007-current",
      "city": "Scottsdale, Arizona",
      "description": "<b>Central Architecture</b>: Defining the PaaS for PayPal, focusing on service discovery.<p><b>Technology Leadership Program</b>: One of ten initially selected into PayPal's Technology Leadership Program, a program whose mission is to strengthen PayPal's bench of future technology leaders by providing talented employees the opportunity to further develop technical and leadership skills through a planned rotation program."
    },
    {
      "employer": "Microchip Technologies",
      "position": "Principal Software Engineer",
      "years_worked": "2000-2007",
      "city": "Chandler, Arizona",
      "description": "Developing Language Tools (e.g., compiler, assemblers, and linkers) for Microchip architectures."
    }
  ]
};

var education = {
  "degrees": [
    {
      "school": "American College of Computer and Information Sciences",
      "degree": "Masters of Science, Computer Science",
      "years_attended": "2002-2006"
    },
    {
      "school": "University of Toledo",
      "degree": "Bachelor of Science, Computer Science and Engineering",
      "years_attended": "1991-1995"
    },
    {
      "school": "Monroe County Community College",
      "degree": "Associate of Science",
      "years_attended": "1989-1991"
    }
  ],
  "online_courses": [
    {
      "course": "Software as a Service",
      "where": "UC BerkleyX (edX)",
      "when": "Fall, 2012",
      "id": "CS169.1x",
      "url": "https://www.edx.org/node/3811#.VHUKK74wQoY"
    },
    {
      "course": "Web Development",
      "where": "Udacity",
      "when": "April, 2014",
      "id": "CS253",
      "url": "https://www.udacity.com/course/cs253"
    },
    {
      "course": "JavaScript Basics",
      "where": "Udacity",
      "when": "December, 2014",
      "id": "UD804",
      "url": "https://www.udacity.com/course/ud804"
    }
  ]
};

function OutputSkillsArea(area, skills) {
  if (skills) {
    $("#skillsH3").append(HTMLskillsAreaStart.replace("%data%", area));
    $(".skills-area:last").append(HTMLskills.replace("%data%", skills));
  }
}

experience.display = function() {
  for (x in experience.jobs) {
    $("#workExperience").append(HTMLworkStart);

    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", experience.jobs[x].employer + HTMLworkTitle.replace("%data%", experience.jobs[x].position)));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", experience.jobs[x].years_worked));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", experience.jobs[x].city));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", experience.jobs[x].description));
  }
}

education.display = function() {
  $("#education").append(HTMLschoolStart);
  for (i in education.degrees) {
    $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.degrees[i].school));
    $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.degrees[i].degree));
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.degrees[i].years_attended));
  }
}

if (bio.skills) {
  $("#header").prepend(HTMLskillsStart);

  OutputSkillsArea("Languages", bio.skills.languages);
  OutputSkillsArea("Software", bio.skills.software);
  OutputSkillsArea("Databases", bio.skills.databases);
  OutputSkillsArea("Operating Systems", bio.skills.OS);
}

$("#header").prepend(HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.pictureURL));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.who));

$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
//$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.city));

experience.display();
education.display();

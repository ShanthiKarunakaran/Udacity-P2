//work object
var work = {
	"jobs" : [
		{
			"employer": "QpointTech",
			"title": "UI Developer",
			"location": "401 Castro Street,Mountain View, CA, US",
			"dates": "September 2010 to present",
			"description": "Develop and maintain the User Interface of the Web application GDX.GDX is a multi-tenant SaaS application used by Manufacturing companies for collecting and managing environmental compliance data from their supply chain.GDX is developed in Java/GRAILS/MySQL with a modern UI developed using HTML/CSS and Javascript."
		},
		{
			"employer": "B!",
			"title": "Web Programmer",
			"location": "Los Gatos, CA, US",
			"dates": "September 2005 to 2010",
			"description": "Key member of the team , responsible in building client facing website.Created user interface using XHTML,CSS,JQuery,AJAX,XSLT,XML."
		},
		{
			"employer": "Ooma",
			"title": "UI Developer",
			"location": "San Francisco, US",
			"dates": "2008 to 2010",
			"description": "Key member developing and maintaining the HTML/CSS , Javascript for the ooma website."
		},
		{
			"employer": "DBSS",
			"title": "Web Programmer",
			"location": "Chennai,India",
			"dates": "September 1995 to 2000",
			"description": "Created user interface using XHTML,CSS"
		}
	],
	display: function() {
		//creates a new div for workexperience
		$("#workExperience").append(HTMLworkStart);
		var obj = work.jobs;
		var formattedString;

		var myMappings = {
		    "HTMLobj" : ["HTMLworkEmployer","HTMLworkTitle","HTMLworkLocation","HTMLworkDates","HTMLworkDescription"],
		    "jobkeys" : ["employer", "title", "location", "dates", "description"]
		};

		for(var prop in obj) {
			//Check to make sure you are including only instances of your own object(not the ones from the Prototype chain)
			if (!obj.hasOwnProperty(prop)) { continue; }

			for(var j=0; j < myMappings.HTMLobj.length; j++) {
				var HTMLstr = myMappings.HTMLobj[j];
				var formattedString = window[HTMLstr].replace("%data%",work.jobs[prop][myMappings.jobkeys[j]]);
				$(".work-entry:last").append(formattedString);
			}
		}
	}
};

//projects object
var projects = {
	"projects" : [
		{
			"title": "Sample Project 1 : web redesign",
			"dates": "September 2009 to 2010",
			"description": "changed the entire web interface.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in placerat sem, in ultrices metus. Aenean vitae ex vitae orci scelerisque mollis ac a metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
			"images" : ["http://placehold.it/120/ccc/fff.png" , "http://placehold.it/130/ccc/000.png"]
		},
		{
			"title": "Sample Project 2: dashboard interface",
			"dates": "September 2011 to 2012",
			"description": "changed the dashboard interface.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in placerat sem, in ultrices metus. Aenean vitae ex vitae orci scelerisque mollis ac a metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
			"images" : ["http://placehold.it/140/ccc/d4d4.png" , "http://placehold.it/150/ccc/f00.png"]
		}
	],
	display: function() {
		var obj = projects.projects;
		var objLen = obj.length;

		var myMappings = {
		    "HTMLobj" : ["HTMLprojectTitle","HTMLprojectDates","HTMLprojectDescription","HTMLprojectImage"],
		    "projectkeys" : ["title", "dates", "description", "images"]
		};

		for(var prop in obj) {
			$("#projects").append(HTMLprojectStart);
			//Check to make sure you are including only instances of your own object(not the ones from the Prototype chain)
			if (!obj.hasOwnProperty(prop)) { continue; }
			for(var j=0; j < myMappings.HTMLobj.length; j++) {
				var HTMLstr = myMappings.HTMLobj[j];

				//Todo : Loop through images array
				/*if (obj.constructor.toString().indexOf("Array") > -1 ) {
					for ( var k = 0; k < )
				}*/

				var formattedString = window[HTMLstr].replace("%data%",obj[prop][myMappings.projectkeys[j]]);
				$(".project-entry:last").append(formattedString);
			}
		}

		//to iterate over all properties of projects , we can iterate over the object using for..in
		/*for( var index in obj) {
			$("#projects").append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%",obj[index].title);
			var formattedprojectDates = HTMLprojectDates.replace("%data%",obj[index].dates);
			var formattedprojectDescription = HTMLprojectDescription.replace("%data%",obj[index].description);

			$(".project-entry:last").append(formattedprojectTitle);
			$(".project-entry:last").append(formattedprojectDates);
			$(".project-entry:last").append(formattedprojectDescription);
			//to iterate over all the array elements in images array within the projects object
			var imgArrayLen = obj[index].images.length;
			for(var j = 0; j < imgArrayLen; j++) {
				var img = obj[index].images[j];
				var formattedprojectImage = HTMLprojectImage.replace("%data%",img);
				$(".project-entry:last").append(formattedprojectImage);
			}
		}*/

	}
};


//bio object
var bio = {
	"name": "Shan Kar",
	"role": "Front End web Developer",
	"welcomeMessage" : "Thanks for checking out my resume",
	"contacts": {
		"mobileNumber": "408-999-9999",
		"emailAddress": "sk@gmail.com",
		"gitHubUserName": "skar",
		"twitterHandle": "@skar",
		"location": "San Jose,CA,95124,US"
	},
	"skills": ["HTML", "CSS", "SASS", "Javascript", "Responsive Web Design"],
	"bioPic": "images/peace_dove.jpg",
	display: function() {
		var obj = bio;

		var formattedName = HTMLheaderName.replace("%data%", obj.name);
		var formattedRole = HTMLheaderRole.replace("%data%", obj.role);
		var formattedMobile = HTMLmobile.replace("%data%",obj.contacts.mobileNumber);
		var formattedEmail = HTMLemail.replace("%data%",obj.contacts.emailAddress);
		var formattedTwitter = HTMLtwitter.replace("%data%",obj.contacts.twitterHandle);
		var formattedGithub = HTMLgithub.replace("%data%",obj.contacts.gitHubUserName);
		var formattedLocation = HTMLlocation.replace("%data%",obj.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%",obj.bioPic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",obj.welcomeMessage);
		var formattedSkills = " ";
		for(var i in obj.skills) {
			formattedSkills += HTMLskills.replace("%data%",obj.skills[i]);
		}


		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);

		//biopic
		$("#header").append(formattedBioPic);

		//skills
		$("#header").append(HTMLskillsStart);
		$("#skills").append(formattedSkills);

		$("#header").append(formattedWelcomeMsg);


		//add contacts to footer
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);
	}
};

var education = {
	"schools": [
		{
			"schoolname" : "CIT",
			"location": "Coimbatore",
			"schoolDegree" : "BS",
			"schoolMajors" : ["ECE"],
			"schoolgradYear" : "1995",
			"url" : "http://en.wikipedia.org/wiki/Coimbatore_Institute_of_Technology"
		},
		{
			"schoolname" : "NIIT",
			"location": "Coimbatore",
			"schoolDegree" : "Computer Science",
			"schoolMajors" : ["CS"],
			"schoolgradYear": "1996",
			"url" : "http://www.niit.com/en/learning-outsourcing"
		}
	],
	"onlineCourses": [
		{
			"title": "Nanodegree Front End Course",
			"school": "udacity.com",
			"dates": "Jan 2015 to present",
			"url": "http://www.udacity.com"
		},
		{
			"title": "JS Ninja",
			"school": "lynda.com",
			"dates": "Jan 2014 to present",
			"url": "http://www.lynda.com"
		}
	],
	display: function() {
		$("#education").append(HTMLschoolStart);
		var schoolObj = education.schools;
		var onlineCoursesObj = education.onlineCourses;

		for( var index in schoolObj) {
			var formattedschoolName = HTMLschoolName.replace("%data%",schoolObj[index].schoolname);
			var formattedschoolCity = HTMLschoolLocation.replace("%data%",schoolObj[index].location);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%",schoolObj[index].schoolDegree);
			var formattedschoolMajors = HTMLschoolMajor.replace("%data%",schoolObj[index].schoolMajors);

			$(".education-entry:last").append(formattedschoolName);
			$(".education-entry:last").append(formattedschoolCity);
			$(".education-entry:last").append(formattedschoolDegree);
			$(".education-entry:last").append(formattedschoolMajors);
		}

		$(".education-entry:last").append(HTMLonlineClasses);
		for( var index in onlineCoursesObj) {
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%",onlineCoursesObj[index].title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",onlineCoursesObj[index].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%",onlineCoursesObj[index].dates);
			var formattedonlineURL = HTMLonlineURL.replace("%data%",onlineCoursesObj[index].url);

			$(".education-entry:last").append(formattedonlineTitle);
			$(".education-entry:last").append(formattedonlineSchool);
			$(".education-entry:last").append(formattedonlineDates);
			$(".education-entry:last").append(formattedonlineURL);
		}
	}
};



//invoke all the display functions for the objects
bio.display();
work.display();
projects.display();
education.display();
//google map display
$("#mapDiv").append(googleMap);







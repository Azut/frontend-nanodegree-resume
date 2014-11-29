//var name = "Fernando Ramos Miracle";
//var role = "Developer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

//Test changing "audacity" to "Udacity"

//var str = "audacity";

//var str2 = str.slice(0,1);

//.toUpperCase().append(str.slice(2));

//console.log(str2);

var skills = ["awesomeness","programming","teaching","JS"];

//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);

var bio = {
	"name" : "Fernando",
	"role" : "Support Technicien EMEA",
	"contacts" : {
		"email" : "framos.miracle@gmail.com",
		"mobile" : "+34 618 174 320",
		"github" : "Azut",
		"location" : "Madrid"
	},

	"welcomeMessage" : "Welcome to my CV!",
	"skills" : [
		"Awesomeness", "programming", "teaching", "JS"
	],
	"bioPic" : "Users/FernandoR/Pictures/Chibi_Lich_King.png",
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedSkills);
$("#header").append(formattedWelcomeMsg);

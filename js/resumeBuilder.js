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
	"eamil" : "framos.miracle@gmail.com",
	"phone" : "+34 618 174 320",
	"photo" : "https://lh6.googleusercontent.com/-zN59jZi-rSI/VHm5bDFqWmI/AAAAAAAAB-k/voNVbSUYWbg/w268-h362-no/IMG_0022.JPG",
	"welcome" : "Welcome to my CV!"
};

$("#main").append(bio.name);
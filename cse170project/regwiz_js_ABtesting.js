var menu = [
  {
    title: "Home Page",
    url  : "../regiwiz_testing_2_ABtesting.html"
  },
  {
    title: "My Schedule",
    url  : "./cse170project/myschedule_ABtesting.html"
  },
  {
    title: "Tips & Updates",
    url  : "./cse170project/tips_ABtesting.html"
  }
];

$(document).on("pageshow", function (event) {
	var items = '', 		
	ul = $(".mainMenu:empty");
	for (var i = 0; i < menu.length; i++) {
		items += '<li><a href="' + menu[i].url + '">' + menu[i].title + '</a></li>';
	}
	ul.append(items);
	ul.listview('refresh'); 
});

var classInfoFile = "./cse170project/cse.json";

$.getJSON(classInfoFile, function(classes){

   	// start with an empty list
   	$('#classList').empty();
   
   	// add classes to the list
	$.each(classes, function(i, className){
		$('#classList').append(generateClassLink(className));
   	});
 	
   	// refresh the page to show the updated class list
   	$('#classList').listview('refresh');
   	
   	$('#classList').append(updateInfo());
   	$('#classList').listview('refresh');
});

function updateInfo(){
	
}

// create a class link
function generateClassLink(className){		
						
	var generateClassLink = $("<li><a onclick='goToClassDetailPage(  " +
						 " \" " + className.name        	+ " \" , " +
						 " \" " + className.courseID       	+ " \" , " +
						 " \" " + className.courseName	 	+ " \" , " +
						 " \" " + className.units		 	+ " \" , " +
						 " \" " + className.enrollment  	+ " \" , " +
						 " \" " + className.openSeats   	+ " \" , " +
						 " \" " + className.enrollRate  	+ " \" , " +
						 " \" " + className.totalSeats  	+ " \" , " +
						 " \" " + className.timeUntilFull  	+ " \" , " +
						 " \" " + className.professorName  	+ " \" , " +
						 " \" " + className.lectureTime  	+ " \" , " +
						 " \" " + className.description 	+ " \"   " +
						 ")'>" + className.name + " " + className.courseName + "</a>" + "</li>");

	return generateClassLink
					
}


function goToClassDetailPage(name, courseID, courseName, units, enrollment, openSeats, enrollRate, totalSeats, timeUntilFull, professorName, lectureTime, description){
	
	
	var classPage = 
		$("<div data-role='page' style='background-color: lightgrey;'>" + 
	  		"<div data-role='header' data-theme='b' data-position='fixed'>" + 
	  			"<h1>" + name + "</h1>" + 
	  		"</div>" + 
	  			
		  	"<div data-role='content'>" + 				  			
		  			"<p>" + courseName + "(" + units + ") units" + "</p><hr />" +	

		  			"<h3>" + "Prof. " + professorName + "</h3><hr />" +
		  			
		  			"<h3> Course ID </h3>" +
		  			"<p>" + courseID + "</p><hr />" +
		  			
		  			"<h3> Lecture Time </h3>" +
		  			"<p>" + lectureTime + "</p><hr />" +	
		  			
			  		"<h3> Enrollment </h3>" +	
			  		"<p> Total capacity is " + " <b>" + totalSeats + "</b></p>" +
			  		"<p> Current enrollment is " + " <b>" + enrollment + "</b></p>" +
			  		"<p> Available seats are " + " <b>" + openSeats + "</b></p><hr />" +
			  		
			  		"<h3> Class Statistics </h3>" +
			  		"<p> Enrollment rate is " + " <b>" + enrollRate + " students / day</b></p>" +
			  		"<p> Estimated time until full is " + " <b>" + timeUntilFull + " days</b></p>" +
			  		
			  		"<div data-role='collapsible' data-theme='a' style='width: 100%;'>" +
			  		   "<h3>Graphical View</h3>" +
			  		   "<img src='http://acsweb.ucsd.edu/~t2ma/cse170project/g.jpg' alt='graphical view image' height='100%' width='100%'>" +
			  		"</div><hr />" +
			  		
			  		"<h3> Course Description </h3>" +
			  		"<p>" + description + "</p>" + 
			  		
		  	"</div>" +
		  	
		  	"<div data-role='footer' data-theme='b' data-position='fixed'>" + 
		  		"<nav data-role='navbar' data-iconpos='top'>" +
		  			"<ul>" +
		  				"<li>" +
		  					"<a href='#homePage_ABtesting' data-icon='false' " +
		  						"data-direction='reverse'" +
		  						"data-transition='slide'>"+
		  						"Home</a>" +
		  				"</li>" +
		  				
		  				"<li>" +
		  					"<a href='./cse170project/myschedule_ABtesting.html' data-icon='false'>"+
		  						"My Schedule</a>" +
		  				"</li>" +
		  				
		  				"<li>" +
		  					"<a href='./cse170project/myschedule2_ABtesting.html' data-icon='false'>"+
		  						"Add</a>" +
		  				"</li>" +
		  			"</ul>" +
		  		"</nav>" +
		  	"</div>" +		
		"</div>");


	 //$.mobile.defaultPageTransition = "slide"; // option to enable slide animation
	 classPage.appendTo($.mobile.pageContainer);
	
	 //go to the newly created page
	 $.mobile.changePage(classPage);
	 
}  


function sticky_relocate() {
	var window_top = $(window).scrollTop();
	var div_top = $('#sticky-anchor').offset().top;
	if (window_top > div_top) {
		$('#headerDiv').addClass('stick');
	} 
	else {
		$('#headerDiv').removeClass('stick');
	}
}

$(function() {
	$(window).scroll(sticky_relocate);
	sticky_relocate();
});
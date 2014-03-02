var menu = [
  {
    title: "Home Page",
    url  : "../regiwiz_testing_2_ABtesting.html"
  },
  {
    title: "My Schedule",
    url  : "/myschedule_ABtesting.html"
  },
  {
    title: "Tips & Updates",
    url  : "/tips_ABtesting.html"
  }
];

$(document).on("pageshow", function (event) {
	var items = '', 			
	ul = $(".mainMenu:empty");  
	for (var i = 0; i < menu.length; i++) {
		items += '<li><a href="' + menu[i].url + ' data-transition='flip' ">' + menu[i].title + '</a></li>';
	}
	ul.append(items);
	ul.listview('refresh'); 
});
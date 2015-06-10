$(document).ready(function() {
	var goToCalendar = localStorage.getItem("goToCalendar");
	if(goToCalendar){
		$("#iframe").attr("src", "http://www.theexordium.org/phpbb3/dkp.php?page=planner");
		localStorage.removeItem("goToCalendar");
	}
});
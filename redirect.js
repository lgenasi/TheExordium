$(document).ready(function() {	
	$(".go-to-events").click(function(){
		localStorage.setItem("goToCalendar", true);
	});
});
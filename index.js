$(document).ready(function() {	
	$('.carousel').carousel({
		interval: 6000
	})

	$(".go-to-event").click(function(){
		localStorage.setItem("goToCalendar", true);
	});
});
$(document).ready(function() {	
	$('.carousel').carousel({
		interval: 6000
	})

	$(".go-to-event").click(function(){
		var goToCalendar = true;
		localStorage.setItem("goToCalendar", goToCalendar);
	});
});
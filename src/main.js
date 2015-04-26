$(document).ready(function(){
	$("#streamsBtn").click(function(){
		$(".section").animate({
			"height": "0",
			"padding": "0"
		}, 1000, function(){
		});
	});
});
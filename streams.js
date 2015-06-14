$(document).ready(function(){
	var xhr = new XMLHttpRequest();
	function getActiveStreamers(){
		xhr.open("GET", "http://www.theexordium.org:1935/statsXMLCORS?flat", true);
		xhr.onload = function (e) {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					$('#streamerList').empty();
					$(xhr.responseText).find('Stream').each(function(){
						var $entry = $(this);
						var streamer = $entry.attr('streamName');
						generateBtn(streamer);
						$("#refreshIcon").removeClass("loading");
					})} else {
						console.error(xhr.statusText);
					}
				}
			};
			xhr.onerror = function (e) {
				console.error(xhr.statusText);
			};
			xhr.send(null);
/*

		$.ajax({
			method: "GET",
			url: "http://www.theexordium.org:1935/statsXMLCORS?flat",
			dataType: "xml",
			async: false
		})
		.done(function(xml){
			})
})*/
}

function generateBtn(streamer){
	var opt = streamer;
	var el = document.createElement("button");
	el.textContent = opt;
	el.value = opt;
	el.className = "streamerBtn btn-lg";
	$('#streamerList').append('<p>');
	$('#streamerList').append(el);
	$('#streamerList').append('</p>');
}

$(document).on('click', ".streamerBtn", function() {
	$("#active").remove();
	$('.stream-player').prepend(
		'<object id="active" width="925" height="600">'+
		'	<param name="movie" value="http://fpdownload.adobe.com/strobe/FlashMediaPlayback.swf">'+
		'	<param name="flashvars" value="src=rtmp%3a%2f%2ftheexordium.org%3a1935%2flive%2f' + this.value + '&amp;poster=http%3A%2F%2Fosmf.org%2Fimages%2Fposter_cathy_fmp.jpg&amp;streamType=live">'+
		'	<param name="allowFullScreen" value="true">'+
		'	<param name="allowscriptaccess" value="always">'+
		'	<embed src="http://fpdownload.adobe.com/strobe/FlashMediaPlayback.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="500" height="300" flashvars="src=rtmp%3A%2F%2Ftheexordium.org%3A1935%2Flive%2FTom&amp;poster=http%3A%2F%2Fosmf.org%2Fimages%2Fposter_cathy_fmp.jpg&amp;streamType=live">'+
		'</object>').hide().fadeIn(600);	    
});

$("#refreshBtn").click(function(){
	$("#refreshIcon").addClass("loading");
	getActiveStreamers();
});

getActiveStreamers();
});
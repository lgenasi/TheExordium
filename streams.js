$(document).ready(function(){

	var streamers = new Array();

	$.ajax({
		method: "GET",
		url: "http://www.theexordium.org:1935/statsXMLCORS?flat",
		dataType: "xml"
	})
	.done(function(xml){
		$(xml).find('Stream').each(function(){
			var $entry = $(this);
			var streamer = $entry.attr('streamName');
			streamers.push(streamer);
		})
	});
	
	var streamerList = document.getElementById("selectStreamer"); 

	setTimeout(function(){
		for(var i = 0; i < streamers.length; i++) {

			var opt = streamers[i];
			var el = document.createElement("option");
			el.textContent = opt;
			el.value = opt;
			streamerList.appendChild(el);
		}
	}, 500);
	
	$("#selectStreamer").on("change", function(){
		
		var selectedStreamer;
		for(var i = 0; i < streamerList.length; i++) {	

			if (streamerList[i].selected){
				selectedStreamer = streamerList[i].value;
				for(var j = 0; j < streamers.length; j++) {
					if (selectedStreamer == streamers[j]){
						$("#active").remove();
						$('.stream-player').prepend(
							'<object id="active" width="925" height="600">'+
							'	<param name="movie" value="http://fpdownload.adobe.com/strobe/FlashMediaPlayback.swf">'+
							'	<param name="flashvars" value="src=rtmp%3a%2f%2ftheexordium.org%3a1935%2flive%2f' + streamers[j] + '&amp;poster=http%3A%2F%2Fosmf.org%2Fimages%2Fposter_cathy_fmp.jpg&amp;streamType=live">'+
							'	<param name="allowFullScreen" value="true">'+
							'	<param name="allowscriptaccess" value="always">'+
							'	<embed src="http://fpdownload.adobe.com/strobe/FlashMediaPlayback.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="500" height="300" flashvars="src=rtmp%3A%2F%2Ftheexordium.org%3A1935%2Flive%2FTom&amp;poster=http%3A%2F%2Fosmf.org%2Fimages%2Fposter_cathy_fmp.jpg&amp;streamType=live">'+
							'</object>').hide().fadeIn(600);				
					}
				}
			}

		}		
	});

});
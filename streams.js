$(document).ready(function(){
	
	function Streamer (name, id) {
		
		this.name = name;
		this.id = id;

	}
	
	var chris = new Streamer("Shingle64 \(Chris\)", "Chris");
	var louis = new Streamer("Ctrl A1t Elite \(Louis\)", "Louis");
	var adam = new Streamer("Gilly \(Adam\)", "Adam");
	var tom = new Streamer("Nafai \(Nafai\)", "Tom");
	var rian = new Streamer("M3n4s0s \(Ryan\)", "Rian");
	var matt = new Streamer("Boris23 \(Matt\)", "Boris23");
	var streamers = [chris, louis, adam, tom, rian, matt];
	
	var streamId;
	var stream = document.getElementById("stream");
	var streamBtn = document.getElementById("streamBtn");
	console.log (streamers);
	
	var streamerList = document.getElementById("selectStreamer"); 

	for(var i = 0; i < streamers.length; i++) {

		var opt = streamers[i].name;
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		streamerList.appendChild(el);
	}
	
	streamBtn.onclick = function(){
		
		var selectedStreamer;
		for(var i = 0; i < streamerList.length; i++) {	

			if (streamerList[i].selected){
				selectedStreamer = streamerList[i].value;
				for(var j = 0; j < streamers.length; j++) {
					if (selectedStreamer == streamers[j].name){
						$("#stream").remove();
						$('.stream-player').prepend(
							'<object id="stream" width="500" height="300">'+
							'	<param name="movie" value="http://fpdownload.adobe.com/strobe/FlashMediaPlayback.swf">'+
							'	<param name="flashvars" value="src=rtmp%3a%2f%2ftheexordium.org%3a1935%2flive%2f' + streamers[j].id + '&amp;poster=http%3A%2F%2Fosmf.org%2Fimages%2Fposter_cathy_fmp.jpg&amp;streamType=live">'+
							'	<param name="allowFullScreen" value="true">'+
							'	<param name="allowscriptaccess" value="always">'+
							'	<embed src="http://fpdownload.adobe.com/strobe/FlashMediaPlayback.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="500" height="300" flashvars="src=rtmp%3A%2F%2Ftheexordium.org%3A1935%2Flive%2FTom&amp;poster=http%3A%2F%2Fosmf.org%2Fimages%2Fposter_cathy_fmp.jpg&amp;streamType=live">'+
							'</object>');



							/*var newParam = document.createElement("param");
							newParam.id = "active";
							newParam.name = "flashvars";
							newParam.value = "src=rtmp%3a%2f%2ftheexordium.org%3a1935%2flive%2f" + streamers[j].id + "&amp;poster=http%3A%2F%2Fosmf.org%2Fimages%2Fposter_cathy_fmp.jpg&amp;streamType=live";
							$("#active").remove();
							stream.appendChild(newParam);	*/						
						}

					}
				}

			}		
		}

	});
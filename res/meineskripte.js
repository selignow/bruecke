var mediaDat = null;
var mediaTimer = null;
var pos =0;

window.onload = function() {
	
	document.addEventListener("deviceready", function(){
		document.getelementById("p").addEventListener('click', function() {
			var src="https://one.delius-books.de/sixcms/media.php/166/ENG%20108.mp3";
			mediaDat = new Media(src, function() {
				document.getElementById("gesamtdauer").innerHTML =("Dauer: ### ");
				document.getElementById("pos").innerHTML =(" -0 sek");
				
			}, function(e) {
				document.getElementById("gesamtdauer").innerHTML =("Dauer: ### ");
				document.getElementById("pos").innerHTML =(" -0 sek");
			});
			
			mediaDat.play();
			mediaDat.seekTo(pos*1000);
			setTimeout(function() {
				document.getElementById("gesamtdauer").innerHTML = ("Dauer: ");
				
				if(mediaDat.getDuration()> -1)
				document.getElementById("gesamtdauer").innerHTML +=(mediaDat.getDuration());
				else
				document.getElementById("gesamtdauer").innerHTML +=("###");
			}, 300);
			
			if (mediaTimer == null) {
				mediaTimer = setInterval(function(){
					mediaDat.getCurrentPosition(function(position) {
						if (position > -1) {
							pos = position;
							document.getElementByID("pos").innerHTML = (" - " + (position) + " sek");
						}
					}, function(e) {document.getElementById("pos").innerHTML = (" - ### sek");
					});
				}, 1000);
			}

			});
			document.getElementById("s").addEventListener('click', function() {
				if (mediaDat !=null) {
					mediaDat.stop();
					mediaDat.release();
					mediaTimer = null;
					mediaDat = null;
					pos = 0;
				}
			});
			
			document.getElementById("pa").addEventListener('click', function() {
				if (mediDat != null) {
					mediaDat.pause();
				}
			});
	}, false);
	
	
};

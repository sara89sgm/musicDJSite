


var songs = new Object();
$(document).ready(function() {
	$("input.spotify_song_search").autocomplete({
        source: function(request, response) {
            $.get("http://ws.spotify.com/search/1/track.json", {
                q: request.term
            }, function(data) {
                response($.map(data.tracks, function(item) {
                    return {label: item.name, track: item};
                }));
            });
        },
        select: function(el, ui) {
        	
        	id=$(this).attr('id');
			
			
        	
        	songs[id]=ui.item.track.href;
                console.log(id+"href:"+ui.item.track.href);
           
        }
        
    });
	
	 //  $('.droparea').droparea([options]);
});




function doRequest(){
	if(logged()){
		var Request = Parse.Object.extend("Request");
		var request = new Request();

		request.set("track1", $("#entry_1").val());
		request.set("track2", $("#entry_2").val());
		request.set("track3", $("#entry_3").val());
		request.set("track4", $("#entry_4").val());
		request.set("track5", $("#entry_5").val());
		var currentUser = Parse.User.current();
		request.set("userId", currentUser.getUsername());
	

		request.save(null, {
		  success: function(gameScore) {
		    // The object was saved successfully.
		  },
		  error: function(gameScore, error) {
		    // The save failed.
		    // error is a Parse.Error with an error code and description.
		  }
		});
	}
	else{
		
	}
}

	


	

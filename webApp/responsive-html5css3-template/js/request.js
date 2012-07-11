

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


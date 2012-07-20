	
	

	
	function urlEncode(obj) {

				var s = '';

				for (var key in obj) {

					s += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]) + '&';

				}

				if (s.length > 0) {

					s = s.substr(0, s.length - 1);

				}



				return (s);

			}

			function requested() {
				alert("searching");

				var params = {

					term: (jQuery('#entry_1').val()),

					country: 'GB',

					media: 'music',

					entity: 'song',

					//attribute: 'artistTerm,albumTerm,songTerm,musicTrackTerm',

					limit: 1,

					callback: 'requestparse'

				};

				var params = urlEncode(params);



				var url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?' + params;

				var html = '<script src="' + url + '"><\/script>';

				jQuery('head').append(html);

			}



			function requestparse(arg) {

				var results = arg.results;

				var html = '';

				for (var i = 0; i < results.length; i++) {

					var item = results[i];

					var obj = {

						source: 0,

						track_id: item.trackId,

						track_name: item.trackCensoredName,

						track_url: item.trackViewUrl,

						artist_name: item.artistName,

						artist_url: item.artistViewUrl,

						collection_name: item.collectionCensoredName,

						collection_url: item.collectionViewUrl,

						genre: item.primaryGenreName,
						
						artwork: item.artworkUrl100

					};
					

					results[i] = obj;
					
					


	html += '<img src="{0}"  width="100" height="100"/>&nbsp;&nbsp;'.replace("{0}", item.artworkUrl100);
					
alert(item.artworkUrl100);
			
				

			
Parse.initialize("9TFpKOfV3hSAaBKazfX4tsLzmB2CMpBqiPPKeQq6", "tSXUDZVzAGipTmfxX5PdtXT2kb3cBxp7m8jjwUa4");
alert("sdf");
	 var currentUser = Parse.User.current();
var Request = Parse.Object.extend("Request");
var request = new Request();
request.set("track1", $("input.j").val());
request.set("track2", $("input.j1").val());
request.set("track3", $("input.j2").val());
request.set("track4", $("input.j3").val());
request.set("track5", $("input.j4").val());
request.set("title1", $("#title1").val());
request.set("description", $("#description").val());
request.set("genre", $("#genre").val());
request.set("tag1", $("#tag1").val());
request.set("tag2", $("#tag2").val());
request.set("tag3", $("#tag3").val());

request.set("cover", item.artworkUrl100);
request.set("by", UserID);
request.save(null, {
 
  success: function(object) {
    alert("sdfsd");
	window.location = "http://sharp-ocean-1212.herokuapp.com/";
  }
  
  
});
}}




function like(RequestID){

var Request = Parse.Object.extend("Request");
var query = new Parse.Query(Request);
query.equalTo(RequestID);
query.find({
success: function(results) {

	results[0].set("like", results[0].get("like")++);
	results[0].save();

},
error: function(error) {
alert("Error: " + error.code + " " + error.message);
}
});
}

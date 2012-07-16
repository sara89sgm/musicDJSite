var listSongs = new Array();
	var actual = 0;
	var lat;
	var lng;
	listSongs[0] = 'http://houseanthems.com/wp-content/uploads/2012/05/Avicii-vs.-Lenny-Kravitz-Superlove-Original-Mix.mp3';
	listSongs[1] = 'http://houseanthems.com/wp-content/uploads/2012/06/Take-A-Walk-The-M-Machine-Remix.mp3';
	listSongs[2] = 'http://houseanthems.com/wp-content/uploads/2012/06/Chris-Lake-John-Dahlback-I-Saw-This-Before-Original-Mix.mp3';
	listSongs[3] = 'http://houseanthems.com/wp-content/uploads/2012/06/Rhythm-Masters-MYNC-Feat.-Wynter-Gordon-I-Feel-Love-Aviciis-Forgotten-Remix.mp3'
	listSongs[4] = 'http://houseanthems.com/wp-content/uploads/2012/06/Tombo-Original-Mix.mp3';

	$(document)
			.ready(
					function() {
						
						$("li.a").hover(
								  function () {
								   $("#exp").empty();
								   $("#exp").append($(this).text());
								   $("#exp").attr("href","#"+$(this).text());
								  }, 
								  function () {
									  $("#exp").empty();
									   $("#exp").append("Request a mix");
								  }
								);
						
						$("#roundb").roundabout({

							clickToFocusCallback : function() {
								changeSong();
							},
							shape : 'figure8'

						});

						$("#roundb").roundabout("animateToChild", 0);

						function changeSong() {

							var num = $("#roundb")
									.roundabout("getChildInFocus");

							$("#mp3Source").attr("src", listSongs[num])
									.detach().appendTo('#audioPlayer');
							$("#audioPlayer").load();
						}
						
						if (navigator.geolocation) {
							  navigator.geolocation.getCurrentPosition(success, error);
							} else {
							  error('not supported');
							}
						
					});
	
	

	function success(position) {
		  lng=position.coords.longitude;
		  lat=position.coords.latitude;
		  
		}

		function error(msg) {
		  var s = document.querySelector('#status');
		  //s.innerHTML = typeof msg == 'string' ? msg : "failed";
		  //s.className = 'fail';
		  
		  console.log("error geolocation");
		}


	
	
	function createRequestMix(){
		var Request = Parse.Object.extend("Request");
		var request = new Request();
		var currentUser = Parse.User.current();
		request.set("emailUser", currentUser.get("email") );
		request.set("playerName", "Sean Plott");
		request.set("cheatMode", false);

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
	


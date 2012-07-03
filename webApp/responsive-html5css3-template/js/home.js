var listSongs = new Array();
	var actual = 0;
	Parse.initialize(
			"j53BRLScogSsHOLMxnKITApQMPNOOZy4z69ngzpe",
			"fKjMX0Wh1yqX0CyZdY4nxASHRHFQS63WkXf6yfcD");
	listSongs[0] = 'http://houseanthems.com/wp-content/uploads/2012/05/Avicii-vs.-Lenny-Kravitz-Superlove-Original-Mix.mp3';
	listSongs[1] = 'http://houseanthems.com/wp-content/uploads/2012/06/Take-A-Walk-The-M-Machine-Remix.mp3';
	listSongs[2] = 'http://houseanthems.com/wp-content/uploads/2012/06/Chris-Lake-John-Dahlback-I-Saw-This-Before-Original-Mix.mp3';
	listSongs[3] = 'http://houseanthems.com/wp-content/uploads/2012/06/Rhythm-Masters-MYNC-Feat.-Wynter-Gordon-I-Feel-Love-Aviciis-Forgotten-Remix.mp3'
	listSongs[4] = 'http://houseanthems.com/wp-content/uploads/2012/06/Tombo-Original-Mix.mp3';

	$(document)
			.ready(
					function() {
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
						
						$('a.more').click(function(e){
						
						    if($(this).parent().hasClass("open")){
						        $(this).parent().animate({"height":100}).removeClass("open");
						        $(this).html("More...");
						    }else{
						        $(this).parent().animate({"height":300}).addClass("open");
						        $(this).html("Less...");
						    }
						    e.preventDefault();
						});
						
					});
	
	
	
	
	
	function login() {
		var user = new Parse.User();
		user.set("username", "my name");
		user.set("password", "my pass");
		user.set("email", "email@example.com");

		// other fields can be set just like with Parse.Object
		user.set("phone", "415-392-0202");

		user.signUp(null, {
			success : function(user) {
				// Hooray! Let them use the app now.
			},
			error : function(user, error) {
				// Show the error message somewhere and let the user try again.
				alert("Error: " + error.code + " " + error.message);
			}
		});
	}
var listSongs = new Array();
	var actual = 0;
	var lat;
	var lng;
	Parse.initialize("9TFpKOfV3hSAaBKazfX4tsLzmB2CMpBqiPPKeQq6", "tSXUDZVzAGipTmfxX5PdtXT2kb3cBxp7m8jjwUa4");
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
						
						$('a.more').click(function(e){
						
						    if($(this).parent().hasClass("open")){
						        $(this).parent().animate({"height":125}).removeClass("open");
						        $(this).html("More...");
						    }else{
						        $(this).parent().animate({"height":300}).addClass("open");
						        $(this).html("Less...");
						    }
						    e.preventDefault();
						});
						
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
	
	
	
//====================== METHODS FOR SAVING SESSION
function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}




	function loadRequests(){
	
	

}




			
//======================================================================== Classes:

// this is the object constructed after the database query .. it handles generating it's HTML
// it also inserts itself into the list and registers it's button to link to the correct reqID

	function RequestTile(id, title, desciption, likes,tags,cover){
		this.id = id;
		this.title= title;
		this.desciption= description;
		this.likes = likes;
		this.tags = new Array();
		this.tags[0]= tags[0];
		this.tags[1]= tags[1];
		this.tags[2]= tags[2];
		this.cover = cover;
		this.writeHTML = writeHTML();
		this.Draw = Draw;
		this.respond();
		}
	
	
	function writeHTML(){
		var html="<li>";
		//html+= "<img src="+this.cover+" width="600" height="600" /> <a class='aaa' onclick='likeOrunlike();'></a><a class='bbb' onclick=\"flag();'><a class='ccc' onclick=fuuz(); ></a><h3>"+this.title+"</h3><a class='more'>More</a> <span class='respond'> respond</span>";
		return html;
	}
	
	
	function Draw(){
		
	}
	
	
	
	
	
	
	

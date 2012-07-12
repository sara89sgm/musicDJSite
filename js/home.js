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
						Parse.initialize("9TFpKOfV3hSAaBKazfX4tsLzmB2CMpBqiPPKeQq6", "tSXUDZVzAGipTmfxX5PdtXT2kb3cBxp7m8jjwUa4");
						loadRequests();

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




			
//======================================================================== Classes:

// this is the object constructed after the database query .. it handles generating it's HTML
// it also inserts itself into the list and registers it's button to link to the correct reqID

	function RequestTile(id, added,by,title, description, likes,tags,cover){
		this.id = id;
		this.title= title;
		this.by=by;
		this.added=added;
		this.description= description;
		this.likes = likes;
		this.tags = new Array();
		this.tags[0]= tags[0];
		this.tags[1]= tags[1];
		this.tags[2]= tags[2];
		this.cover = cover;
		this.wHTML = wHTML;
		this.respond =respond;
		}
	
	
	function wHTML() {
	// ditching the onClick stuff on anchor ..
	var dateago = prettyDate(this.added);
			var html = "<li><img src=" + this.cover 
		+ " width='600' height='600' /> <a class='aaa' href='page1.html'></a>"+
		"<a class='bbb' href='page1.html'><a class='ccc' href='page1.html'></a>"+
		"<h3>" + this.title + "</h3><h4 style='{font-style:italic};'>By:"
		+"PLACEHOLDER"+"</h4>"+dateago +"<a class='more'>More</a> <span class='respond' > respond</span>";
		return html;
	}
	
var RequestList = new Array();
var sortBy="added"; 

//======================================================================== REquest logic tier

	function loadRequests(){
	
	alert('loading requests');
	// requstList.push(new RequestTile(id,added,by,title,description , likes,tags,cover);
	//  
		var Request = Parse.Object.extend("Request");
		var query = new Parse.Query(Request);
		query.equalTo();
		query.find({
		success: function(results) {
		for(i=0 ; i<results.length ; i++){
		
		// Adaptation needed:
		// Create date object done
		// tag array done
		// write them all done
		// test .. 
		
		var tags= new Array();
		tags[0]=results[i].get('tag1');
		tags[1]=results[i].get('tag2');
		tags[2]=results[i].get('tag3');
		var date= new Date(results[i].get('createdAt'));
		
		RequestList.push(new RequestTile(results[i].get('id'),
										 date,
										 results[i].get('by'),
										 results[i].get('title'),
										 results[i].get('description'),
										 results[i].get('likes'),
										 tags,
										 results[i].get('cover')));
		}
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
	}
	});
	}
	alert('added to array');
	render();
}


	function render(){
		alert('rendering');
		RequestList.sort(dynamicSort(sortBy));
		var finalHtml ="<ul>";
		
		// 1. Check sort is correct/
		// 2. more field fills up description and expands
		for (i = 0 ; i < RequestList.length ;i++)
		{
			finalHtml=finalHtml+RequestList[i].wHTML();		
		}
		finalHtml=finalHtml+"</ul>";
		alert(finalHtml);
		// fade out effect :
		$('#requestslist').fadeOut("slow", function(){
		
		
   		 var div = $("<div id='requestslist'>"+finalHtml+"</div>").hide(); 
  		 $(this).replaceWith(div);
    	 $('#requestslist').fadeIn("slow");
});
		
		//put it on the screen:
		//$('requestslist).replaceWith(finalHtml);
		
		
	}


// method to be used for comparing feeding it a particular property .. to be used on sortBy or on refresh
// usage: LIST.sort(dynamicSort("title"));
function dynamicSort(property) {
    return function (a,b) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
}


   
        function OnChange(dropdown)
{
    var myindex  = dropdown.selectedIndex
    var SelValue = dropdown.options[myindex].value
    alert("now Sorting by "+SelValue);
    var sortBy=SelValue;
    render();
    return true;
}

function respond(){
	alert("responded with id:" + this.id);
}

//================= Borrowed methods :D
/*
 * JavaScript Pretty Date
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed under the MIT and GPL licenses.
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
function prettyDate(time){
	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
		diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);
			
	if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
		return;
			
	return day_diff == 0 && (
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
		day_diff == 1 && "Yesterday" ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
}

// If jQuery is included in the page, adds a jQuery plugin to handle it as well
if ( typeof jQuery != "undefined" )
	jQuery.fn.prettyDate = function(){
		return this.each(function(){
			var date = prettyDate(this.title);
			if ( date )
				jQuery(this).text( date );
		});
	};
	
	

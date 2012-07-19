var RequestList = new Array();
var sortBy="added"; 
var reqindex=5;		// these indeces are for keeping track of when
var respindex=0;
var step=5;
var didScroll =false;
var ResonseList = new Array();
var sortBy="added"; 

$(document)
			.ready(
					function() {

Parse.initialize("9TFpKOfV3hSAaBKazfX4tsLzmB2CMpBqiPPKeQq6", "tSXUDZVzAGipTmfxX5PdtXT2kb3cBxp7m8jjwUa4");
						loadRequests();
						loadResonses();

						$(window).scroll(function() {
							alert("scroll");
							if($(window).scrollTop()!=0){
							didScroll = true;
							}
						});
						var RequestID;
						      $("#requestslist");/*.mCustomScrollbar({
        						mouseWheel:false,
        						scrollButtons:{
          							enable:true
        							}
							});*/
						     
});

// scrollbar for style:
(function($){
        $(window).load(function(){
            $("#requestslist").mCustomScrollbar();
        });
    })(jQuery);
//REQUEST AND RESPONSE POP UPS//
// MODAL REQUEST POP UP - NEEDS TO BE IN SAME SCRIPT AS RENDERING FUNCTION TO WORK ELSE FUNCTION NOT DEFINED JAVASCRIPT ERROR	//
function reqpopup(){
	
	var currentUser = Parse.User.current();
if (currentUser) {
    // do stuff with the user
		
		alert("pop");
		
//Getting the variable's value from a link 
		var requestBox = $("#request-box");

		//Fade in the Popup
		$(requestBox).fadeIn(300);
		
		//Set the center alignment padding + border see css style
		var popMargTop = ($(window).height() - $(requestBox).height() ) / 2; 
		var popMargLeft = ($(window).width() - $(requestBox).width()) / 2; 
	
		$(requestBox).css({ 
			'margin-top' : popMargTop,
			'margin-left' : popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);
	
		
		
	}  else {
    alert("sign in");
}}
	
	$(document).ready(function() {
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() { 
	  $('#mask , .request-popup').fadeOut(300 , function() {
		$('#mask').remove();  
	}); 
	return false;
	});
	$("#signedUP").hide();
	
	
	
	

});


//END REQUEST POP UP

//MODAL RESPONSE POPUP
	var RequestID;
	function respopup(param1) {
		
		alert("popresponse");
		
		RequestID = param1;
		
		alert(""+param1+"");
                //Getting the variable's value from a link 
		var responseBox = $("#response-box");

		//Fade in the Popup
		$(responseBox).fadeIn(300);
		
		//Set the center alignment padding + border see css style
		var popMargTop = ($(window).height() - $(responseBox).height() ) / 2; 
		var popMargLeft = ($(window).width() - $(responseBox).width()) / 2; 
	
		$(responseBox).css({ 
			'margin-top' : popMargTop,
			'margin-left' : popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);
	
	
		return false;
	};
	
	$(document).ready(function() {
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').live('click', function() { 
	  $('#mask , .response-popup').fadeOut(300 , function() {
		$('#mask').remove();  
	}); 
	return false;
	});
	$("#signedUP").hide();
	
	

});

//end response pop up//

//====================== METHODS FOR SAVING SESSION
function setCookie()
{ 

alert("settting cookie");
document.cookie="yourname=" + prompt("What is your name?");
}

function handlecookie(){
	
	var temp = getCookie(ssdf)
function cookie(){
function getCookieValue(key)
{alert("getcookie");
    currentcookie = document.cookie;
    if (currentcookie.length > 0)
    {
        firstidx = currentcookie.indexOf(key + "=");
        if (firstidx != -1)
        {
            firstidx = firstidx + key.length + 1;
            lastidx = currentcookie.indexOf(";",firstidx);
            if (lastidx == -1)
            {
                lastidx = currentcookie.length;
            }
            return unescape(currentcookie.substring(firstidx, lastidx));
        }
    }
    return "";
}

alert(getCookieValue("yourname"));

}}



			
//======================================================================== Classes:

// this is the object constructed after the database query .. it handles generating it's HTML
// it also inserts itself into the list and registers it's button to link to the correct reqID

	function RequestTile(id, added,by,title, description, cover, tags, likes, track1, track2,track3,track4,track5){
		// 5 tracks is just quick(not even that quick) hack .. should use array like for tags
		this.id = id;
		this.title= title;
		this.by=by;
		this.added=added;
		this.description= description;
		this.likes = likes;
		this.track1=track1;
		this.track2=track2;
		this.track3=track3;
		this.track4=track4;
		this.track5=track5;
		this.tags = new Array();
		this.tags[0]= tags[0];
		this.tags[1]= tags[1];
		this.tags[2]= tags[2];
		this.cover = cover;
		this.wHTML = wHTML;
		this.mHTML = mHTML;
		//this.respond = respond;
		this.render = render;
		}
	
	function more(more){
		var id = $(more).parent().attr("id"); 
				if($(more).parent().hasClass("open")){
						        $(more).parent().animate({"height":125}).removeClass("open");
							$("#more").remove();
						        $(more).html("More...");
						    }else{
						        $(more).parent().animate({"height":300}).addClass("open");
							 $(more).html("Less...");
							 $(more).parent().append(findReq(id).mHTML());			    
}
						}

	
	function mHTML(){
		var html = "<div id='more' style='clear:both;'> </h1>"+"description:"+this.description+"tracklist :"+this.track1+"<br/>"+"tracklist :"+this.track2+"<br/>"+"tracklist :"+this.track3+"<br/>"+"tracklist :"+this.track4+"<br/>"+"tracklist :"+this.track5+"</div>"; // do the same for track2 etc ..
	return html;
	}
	
	
	function wHTML() {
var html ="<li class='box' id="+this.id+"><img src="+"'"+this.cover+"'"+" width='600' height='600' /> <h3>" + this.title + "</h3><a id='' class='aaa'></a><a id='' class='bbb'></a><a id='' class='ccc' onclick=\"like('"+this.id+"')\" href='#request-box'></a><div style='clear:right;'></div><h1 style='{font-style:italic;}'>By:"+ this.by + "</h1> <br>"+prettyDate(ISODateString(this.added))+"<br><a class='more' onclick='more(this);'>More</a><span class='respond' onclick=\"respopup('"+this.id+"')\">respond</span></li>";
		return html;
	}
	

//======================================================================== REquest logic tier

	function loadRequests(){
		var Request = Parse.Object.extend("Request");
		var query = new Parse.Query(Request);
		query.equalTo();
		query.find({
		success: function(results) {
		for(i=0 ; i<results.length ; i++){
		    var tags= new Array();
		    tags[0]=results[i].get('tag1');
		    tags[1]=results[i].get('tag2');
		    tags[2]=results[i].get('tag3');
		      
		    var date= new Date(results[i].createdAt);
		    RequestList.push(new RequestTile(results[i].id,date, results[i].get('by'),results[i].get('title1'),results[i].get('description'),results[i].get('cover'),tags,results[i].get('likes'),
								results[i].get('track1'),
								results[i].get('track2'),
								results[i].get('track3'),
								results[i].get('track4'),
								results[i].get('track5')
								));		
 
		}
		 
		render();
		
	
		},
		error: function(error) {
			console.log("Error: " + error.code + " " + error.message);
	    }
	});
	
	}

	function render(){
		RequestList.sort(dynamicSort(sortBy));
		var finalHtml ="<ul>";
		
		// 1. Check sort is correct/
		// 2. more field fills up description and expands
		for (i = 0 ; i <5  ;i++) //RequestList.length
		{
			finalHtml=finalHtml+RequestList[i].wHTML();		
		}
		finalHtml=finalHtml+'</ul><div id="loadmoreajaxloader" style="display:none;"><center><img src="img/ajax-loader.gif" /></center></div>';
		// fade out effect :
		$('#requestslist').fadeOut("slow", function(){
		
		
   		 var div = $("<div id='requestslist'>"+finalHtml+"</div>").hide(); 
  		 $(this).replaceWith(div);
    	 $('#requestslist').fadeIn("slow");
	
	});
	
	infiniteloader();
}


	function infiniteloader(){
	setInterval(function() {
    	if ( didScroll ) {
        	didScroll = false;
        	// Check your page position and then
        	// Load in more results
	
		 if(reqindex < RequestList.length)
    		{
        		$('#loadmoreajaxloader').show(2000 ,function(){
			
			var i;			
			for(i=reqindex; (i<RequestList.length && i< reqindex+step);i++){
			$("#requestslist ul").append(RequestList[i].wHTML());			
			}
			reqindex=i;
               		$('#loadmoreajaxloader').fadeOut("slow");	
			});
            	}
		else
            	{
                $('#loadmoreajaxloader').html("<center>you've reached the end, you can try making your own request or some music :)</center>");
		$('#loadmoreajaxloader').show();
  		}
	}
}, 250);
}
	




//========== RESponse section:

	function ResonseTile(id, added,by,title, description, likes,tags,cover,track1,track2,track3,track4,track5,mix){
		// 5 tracks is just quick(not even that quick) hack .. should use array like for tags
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
		this.track1=track1;
		this.track2=track2;
		this.track3=track3;
		this.track4=track4;
		this.track5=track5;
		this.mix=mix;
		this.wresonseHTML = wresonseHTML;
		//this.respond = respond;
		this.render = render;
		}
	
	
	function wresonseHTML() {
	// ditching the onClick stuff on anchor ..
	//alert("wHTML feeder called");
	//var dateago = prettyDate(this.added); // something goes bad here 
	//alert(dateago);
			var resonsehtml ="<li><audio src='"+this.track5+"' controls></audio></li>"; // do the same for track2 etc ..
		//alert("it looks like this:"+html);
		return resonsehtml;
  

	}
	


//======================================================================== REquest logic tier

	function loadResonses(){
		var Resonse = Parse.Object.extend("Resonse");
		var query = new Parse.Query(Resonse);
		query.equalTo();
		query.find({
		success: function(result) {
		for(i=0 ; i<result.length ; i++){
			var resonsetags= new Array();
			resonsetags[0]=result[i].get('tag1');
		    resonsetags[1]=result[i].get('tag2');
		    resonsetags[2]=result[i].get('tag3');
		    
		    var date= new Date(result[i].get('createdAt'));
		    ResonseList.push(new ResonseTile(result[i].get('id'),
										 date,
										 result[i].get('by'),
										 result[i].get('title1'),
										 result[i].get('description'),
										 result[i].get('likes'),
										 resonsetags,
										 result[i].get('track1'),
										 result[i].get('track2'),
										 result[i].get('track3'),
										 result[i].get('track4'),
										 result[i].get('track5'),
										 result[i].get('mix')
										 ));
										 
		}
		 
		renderresonse();
	
		},
		error: function(error) {
			console.log("Error: " + error.code + " " + error.message);
	    }
	});
	
	}

	function renderresonse(){
		ResonseList.sort(dynamicSort(sortBy));
		var finalHtml ="<ul>";
		
		// 1. Check sort is correct/
		// 2. more field fills up description and expands
		for (i = 0 ; i < ResonseList.length ;i++)
		{
			finalHtml=finalHtml+ResonseList[i].wresonseHTML();		
		}
		finalHtml=finalHtml+"</ul>";
		// fade out effect :
		$('#rlist').fadeOut("slow", function(){
		
		
   		var div = $("<div id='rlist'>"+finalHtml+"</div>").hide(); 
  		 $(this).replaceWith(div);
    	 $('#rlist').fadeIn("slow");
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
    var sortBy=SelValue;
    render();
    return true;
}

	function OnChangeresonse(dropdown) {
	var myindex  = dropdown.selectedIndex
    var SelValue = dropdown.options[myindex].value
    var sortByRes=SelValue;
    renderResonse();
    return true;

	}


//================ find res/reqTile:

	function findReq(id){
	for (i = 0 ; i < RequestList.length ;i++){
		if(RequestList[i].id == id){
		return RequestList[i];
	}
	}
	return null;
}


	function findRes(id){
	for (i = 0 ; i < ResonseList.length ;i++){
		if(Resonse[i].id = id){
		return ResonseList[i];
	}
	}
	return null;
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
	



function ISODateString(d){  
  function pad(n){return n<10 ? '0'+n : n}  
  return d.getUTCFullYear()+'-'  
      + pad(d.getUTCMonth()+1)+'-'  
      + pad(d.getUTCDate())+'T'  
      + pad(d.getUTCHours())+':'  
      + pad(d.getUTCMinutes())+':'  
      + pad(d.getUTCSeconds())+'Z'  
}  




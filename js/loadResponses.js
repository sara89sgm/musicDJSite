//========== RESponse section:
$(document)
			.ready(
					function() {
						Parse.initialize("9TFpKOfV3hSAaBKazfX4tsLzmB2CMpBqiPPKeQq6", "tSXUDZVzAGipTmfxX5PdtXT2kb3cBxp7m8jjwUa4");
	function ResponseTile(id, added,by,title, description, likes,tags,cover,track1,track2,track3,track4,track5,mix){
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
		this.wHTML = wHTML;
		//this.respond = respond;
		this.render = render;
		}
	
	
	function wHTML() {
	// ditching the onClick stuff on anchor ..
	//alert("wHTML feeder called");
	//var dateago = prettyDate(this.added); // something goes bad here 
	//alert(dateago);
			var html ="<li><img src=" +""+    // this.cover
			+" width='600' height='600' /><a class='bbb' href='page1.html'><a class='ccc' href='page1.html'><span class='respond'> respond</span>"+"</a><h1>" + this.title + "</h1><h1 style='{font-style:italic};'>By:"+this.by+
				+"user"+"</h1>"+"2 days ago" +"<audio id='audioPlayer' controls='controls' >"+
						"<source id='mp3Source' type='audio/mp3'"+
								+"src="+this.mix+"/></audio>""<a class='' href='page1.html'></a>"+"<a class='more'></a>"
				"<div>tracklist :"+this.track1+"<br/>"+"tracklist :"+this.track2+"<br/>"+"tracklist :"+this.track3+"<br/>"+"tracklist :"+this.track4+"<br/>"+"tracklist :"+this.track5+"</div>"; // do the same for track2 etc ..
		//alert("it looks like this:"+html);
		return html;
	}
	
var ResponseList = new Array();
var sortBy="added"; 

//======================================================================== REquest logic tier

	function loadResponses(){
		var Request = Parse.Object.extend("Response");
		var query = new Parse.Query(Response);
		query.equalTo();
		query.find({
		success: function(results) {
		for(i=0 ; i<results.length ; i++){
			var tags= new Array();
			tags[0]=results[i].get('tag1');
		    tags[1]=results[i].get('tag2');
		    tags[2]=results[i].get('tag3');
		    
		    var date= new Date(results[i].get('createdAt'));
		    RequestList.push(new RequestTile(results[i].get('id'),
										 date,
										 results[i].get('by'),
										 results[i].get('title1'),
										 results[i].get('description'),
										 results[i].get('likes'),
										 tags,
										 results[i].get('track1'),
										 results[i].get('track2'),
										 results[i].get('track3'),
										 results[i].get('track4'),
										 results[i].get('track5'),
										 reuslts[i].get('mix')
										 ));
										 
		}
		 
		render();
	
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
	    }
	});
	
	}



	function renderresponse(){
		alert('rendering');
		ResponseList.sort(dynamicSort(sortBy));
		var finalHtml ="<ul>";
		
		// 1. Check sort is correct/
		// 2. more field fills up description and expands
		for (i = 0 ; i < ResponseList.length ;i++)
		{
			finalHtml=finalHtml+ResponseList[i].wHTML();		
		}
		finalHtml=finalHtml+"</ul>";
		alert(finalHtml);
		// fade out effect :
		$('#ResponseList').fadeOut("slow", function(){
		
		
   		 var div = $("<div id=ResponseList'>"+finalHtml+"</div>").hide(); 
  		 $(this).replaceWith(div);
    	 $('#ResponseList').fadeIn("slow");
});
		
		//put it on the screen:
		//$('requestslist).replaceWith(finalHtml);
		
		
	}})

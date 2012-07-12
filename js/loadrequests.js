//========== RESponse section:
$(document)
			.ready(
					function() {
	//======================================================================== Classes:

// this is the object constructed after the database query .. it handles generating it's HTML
// it also inserts itself into the list and registers it's button to link to the correct reqID

	function RequestTile(id, added,by,title, description, likes,tags,cover,track1,track2,track3,track4,track5){
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
				+"user"+"</h1>"+"2 days ago" +"<a class='' href='page1.html'></a>"+"<a class='more'></a>"
				"<div>tracklist :"+this.track1+"<br/>"+"tracklist :"+this.track2+"<br/>"+"tracklist :"+this.track3+"<br/>"+"tracklist :"+this.track4+"<br/>"+"tracklist :"+this.track5+"</div>"; // do the same for track2 etc ..
		//alert("it looks like this:"+html);
		return html;
	}
	
var RequestList = new Array();
var sortBy="added"; 

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
										 results[i].get('track5')
										 ));
										 
		}
		 
		render();
	
		},
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
	    }
	});
	
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
})

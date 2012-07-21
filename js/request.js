
	function ResonseTile(id, added,by,title, description, cover, tags, likes, track1, track2,track3,track4,track5){
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
		var html = "<div id='more' style='clear:both;'>"+"<ul id='tags'><li class='tag' >"+this.tags[0]+"</li>"+"<li class='tag' >"+this.tags[1]+"</li>"+"<li class='tag' >"+this.tags[2]+"</li></ul>"+"<ul id='tracklist'><li>"+this.track1+"</li><li>"+this.track2+"</li><li>"+this.track3+"</li><li>"+this.track4+"</li><li>"+this.track5+"</ul>"+"<div id='desc' >"+this.description+"</div></div>"; // do the same for track2 etc ..
	return html;
	}
	
	
	function wHTML() {
var html ="<li class='box' id="+this.id+"><img src="+"'"+this.cover+"'"+" width='600' height='600' /> <h3>" + this.title + "</h3><a id='' class='aaa'></a><a id='' class='bbb'></a><a id='' class='ccc' onclick=\"like('"+this.id+"')\" href='#request-box'></a><div style='clear:right;'></div><h1 style='{font-style:italic;}'>By:"+ this.by + "</h1> <br>"+prettyDate(ISODateString(this.added))+"<br><a class='more' onclick='more(this);'>More</a><span class='respond' onclick=\"respopup('"+this.id+"')\">respond</span></li>";
		return html;
	}
	

//======================================================================== REquest logic tier

	function loadResonses(){
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
		var finalHtml ="<ul id='list-req'>";
		
		// 1. Check sort is correct/
		// 2. more field fills up description and expands
		for (i = 0 ; i <5  ;i++) //RequestList.length
		{
			finalHtml=finalHtml+RequestList[i].wHTML();		
		}
		finalHtml=finalHtml+'</ul><div id="loadmoreajaxloader" style="display:none;"><center><img src="img/ajax-loader.gif" /></center></div>';
		// fade out effect :
		$('#resonseslist').fadeOut("slow", function(){
		
		
   		 var div = $("<div id='resonseslist'>"+finalHtml+"</div>").hide(); 
  		 $(this).replaceWith(div);
    	 $('#resonseslist').fadeIn("slow");
	
	});
	$("#resonseslist").mCustomScrollbar("update");
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
			$("#resonseslist ul").append(RequestList[i].wHTML());			
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
	


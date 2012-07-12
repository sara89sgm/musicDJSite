function requested(){
 

var Request = Parse.Object.extend("Request");
var request = new Request();
request.set("track1", $("#entry_1").val());
request.set("track2", $("#entry_2").val());
request.set("track3", $("#entry_3").val());
request.set("track4", $("#entry_4").val());
request.set("track5", $("#entry_5").val());
request.set("title1", $("#title1").val());
request.set("description", $("#description").val());
request.set("genre", $("#genre").val());
request.set("tag1", $("#tag1").val());
request.set("tag2", $("#tag2").val());
request.set("tag3", $("#tag3").val());
request.set("cover", $("#picture").val());
request.set("by", "User");
request.save(null, {
 
  success: function(object) {
    alert("sdfsd");
  }
  
  
});
}

function like(reqID){
	
alert("like");

var Request = Parse.Object.extend("Request");
var query = new Parse.Query(Request);
query.equalTo(reqID);
query.find({
success: function(results) {

var Like = results[0].get("like") ++;

},
error: function(error) {
alert("Error: " + error.code + " " + error.message);
}
});
}
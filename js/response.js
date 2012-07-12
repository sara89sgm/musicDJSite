function response(){
 Parse.initialize("9TFpKOfV3hSAaBKazfX4tsLzmB2CMpBqiPPKeQq6", "tSXUDZVzAGipTmfxX5PdtXT2kb3cBxp7m8jjwUa4");

var Response = Parse.Object.extend("Response");
var response = new Response();
response.set("track1", $("#entry_1").val());
response.set("track2", $("#entry_2").val());
response.set("track3", $("#entry_3").val());
response.set("track4", $("#entry_4").val());
response.set("track5", $("#entry_5").val());
response.set("title1", $("#title1").val());
response.set("description", $("#description").val());
response.set("genre", $("#genre").val());
response.set("tag1", $("#tag1").val());
response.set("tag2", $("#tag2").val());
response.set("tag3", $("#tag3").val());
var currentUser = Parse.User.current();
		response.set("userId", currentUser.username);
response.save(null, {
 
  success: function(object) {
    alert("sdfsd");
  }
  
  
});
}
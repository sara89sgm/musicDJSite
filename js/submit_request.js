function requested(){
 Parse.initialize("9TFpKOfV3hSAaBKazfX4tsLzmB2CMpBqiPPKeQq6", "tSXUDZVzAGipTmfxX5PdtXT2kb3cBxp7m8jjwUa4");

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
var currentUser = Parse.User.current();
		request.set("userId", currentUser.username);
request.save(null, {
 
  success: function(object) {
    alert("sdfsd");
  }
  
  
});
}
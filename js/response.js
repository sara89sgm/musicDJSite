function resonses(){
alert("sdf");
Parse.initialize("9TFpKOfV3hSAaBKazfX4tsLzmB2CMpBqiPPKeQq6", "tSXUDZVzAGipTmfxX5PdtXT2kb3cBxp7m8jjwUa4");
var Request = Parse.Object.extend("Request");
var query = new Parse.Query(Request);
query.equalTo();
query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + " requests.");
	alert(results[0].get("track1"));
	alert(results[1].track1);
	alert(results[2].track1);
	alert(results[3].track1);
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
}
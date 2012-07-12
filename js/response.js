Parse.initialize("9TFpKOfV3hSAaBKazfX4tsLzmB2CMpBqiPPKeQq6", "tSXUDZVzAGipTmfxX5PdtXT2kb3cBxp7m8jjwUa4");

function saveresponse(){
 alert("responding");
var Resonse = Parse.Object.extend("Resonse");
var resonse = new Resonse();
resonse.set("track1", $("#entry_1").val());
resonse.set("track2", $("#entry_2").val());
resonse.set("track3", $("#entry_3").val());
resonse.set("track4", $("#entry_4").val());
resonse.set("track5", $("#entry_5").val());
resonse.set("title1", $("#title1").val());
resonse.set("description", $("#description").val());
resonse.set("genre", $("#genre").val());
resonse.set("tag1", $("#tag1").val());
resonse.set("tag2", $("#tag2").val());
resonse.set("tag3", $("#tag3").val());
resonse.set("by", "User");
resonse.set("mix", "https://s3-eu-west-1.amazonaws.com/fuuzik/");
resonse.save(null, {
 
  success: function(object) {
    alert("Done");
  }
  
  
});
}